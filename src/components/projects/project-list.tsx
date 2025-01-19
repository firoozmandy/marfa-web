import ProjectCard from "@/components/projects/project-card";
import { useState, useEffect, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from 'axios'
import {
  useQuery,
} from '@tanstack/react-query'

type ProjectListProps = {
  limit: number;
  showPagination: boolean;
  grid?: string;
};

export default function ProjectList({
  limit,
  grid,
  showPagination,
}: ProjectListProps) {
  const [_, setTotalItems] = useState<number | null>(null);

  const { isPending, error, data } = useQuery({
    queryKey: ['projects'],
    queryFn: () =>
      axios
        .get('/data/projects.json')
        .then((res) => res.data),
  })

  const getTotalItems = useCallback(async () => {
    try {
      const total = 12
      setTotalItems(total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [limit]);

  useEffect(() => {
    getTotalItems();
  }, [getTotalItems]);

  if (error) return 'An error has occurred: ' + error.message

  const content = (
    <>
      <div
        className={cn(
          "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
          grid,
        )}
      >
        {isPending &&
          Array.from({ length: limit }).map((_, i) => (
            <Skeleton key={i} className="w-full h-[45.6rem]" />
          ))}

        {data?.slice(0, limit).map((project: Post) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
      {data?.length && showPagination ? (
        <div className="mt-10 text-center">
          <Button
            size={"lg"}
          >نمایش بیشتر </Button>
        </div>
      ) : null}
    </>
  );

  return content;
}
