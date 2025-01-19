import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import ProjectCard from "./project-card";
import { useState, useEffect, useRef, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import axios from 'axios'
import {
  useQuery,
} from '@tanstack/react-query'

type ProjectSliderProps = {
  limit: number;
  swiperParams: SwiperOptions;
};

export default function ProjectSlider({
  limit,
  swiperParams,
}: ProjectSliderProps) {
  const sliderRef = useRef<any>(null);
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
      <div className="">
        {isPending && (
          <div className="grid grid-cols-2 gap-10">
            {Array.from({ length: 2 }).map((_, i) => (
              <Skeleton key={i} className="h-[45.6rem] w-full" />
            ))}
          </div>
        )}

        <div className="projects-slider relative">
          <Swiper {...swiperParams} ref={sliderRef}>
            {data?.slice(0, limit).map((project: Post) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );

  return content;
}
