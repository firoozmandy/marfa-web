import PostCard from "@/components/posts/post-card";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import axios from 'axios'
import {
  useQuery,
} from '@tanstack/react-query'

type PostListProps = {
  limit: number;
  showPagination: boolean;
  grid?: string;
};

export default function PostList({
  limit,
  grid,
  showPagination,
}: PostListProps) {
  const [totalItems, setTotalItems] = useState<number | null>(null);
console.log(totalItems);
  const { isPending, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      axios
        .get('/data/posts.json')
        .then((res) => res.data),
  })

  const getTotalItems = useCallback(async () => {
    try {
      const total = 12
      setTotalItems(total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    getTotalItems();
  }, [getTotalItems]);

  if (error) return 'An error has occurred: ' + error.message

  const content = (
    <>
      <div className={cn("grid grid-cols-1 gap-10 lg:grid-cols-3", grid)}>
        
        {isPending &&
          Array.from({ length: limit }).map((_, i) => (
            <Skeleton key={i} className="w-full h-[33rem]" />
        ))}

        {data?.slice(0, limit).map((post: Post) => {
          return <PostCard post={post} key={post.id} />;
        })}
      </div>
      {data?.length && showPagination ? (
        <div className="mt-10 text-center">
          <Button
            size={"lg"}
          >نمایش بیششتر</Button>
        </div>
      ) : null}
    </>
  );

  return content;
}
