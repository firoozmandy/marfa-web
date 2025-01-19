import TestimonialsSliderLayout2 from "@/components/testimonials-slider-layout-2";
import { Pagination } from "swiper/modules";
import SectionTitle from "./section-title";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const testimonials = [
  {
    name: "بهار بتوان",
    company: "شرکت برنامه نویسی مارفا",
    comment:
      " مارفا یکی از هیجان انگیزترین هاست، اگر به شکل دادن به یک مدل کسب و کار جدید برای سازندگان علاقه دارید، این تیمی است که باید به آن بپیوندید..",
    image: "/public/freepik/bb2.bmp",

    rating: 5,
  },
  {
    name: "بهراد بتوان",
    company: "شرکت مهندسی بهارد",
    comment:
      "مارفا یکی از هیجان انگیزترین هاست، اگر به شکل دادن به یک مدل کسب و کار جدید برای سازندگان علاقه دارید، این تیمی است که باید به آن بپیوندید.",
    image: "/public/freepik/ba2.bmp",

    rating: 5,
  },
  {
    name: "بهار بتوان",
    company: "شرکت برنامه نویسی مارفا",
    comment:
      "مارفا یکی از هیجان انگیزترین هاست، اگر به شکل دادن به یک مدل کسب و کار جدید برای سازندگان علاقه دارید، این تیمی است که باید به آن بپیوندید..",
    image: "/public/freepik/bb2.bmp",

    rating: 5,
  },
  {
    name: "بهار بتوان",
    company: "شرکت برنامه نویسی مارفا",
    comment:
      "مارفا یکی از هیجان انگیزترین هاست، اگر به شکل دادن به یک مدل کسب و کار جدید برای سازندگان علاقه دارید، این تیمی است که باید به آن بپیوندید..",
    image: "/public/freepik/bb3.bmp",

    rating: 5,
  },
];

const SectionTestimonialsSliderLayout2 = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#EBE4FA]/25 to-muted/25 py-20 dark:bg-slate-900 dark:bg-none lg:py-24">
      <div className="container relative overflow-hidden xl:left-[calc((100vw-1312px)/4)] xl:max-w-[calc(1312px+((100vw-1312px)/2))] xl:pr-[calc((100vw-1280px)/2)]">
        <SectionTitle
          subtitle="مشتریانی  که قبلاً خدمات ما را امتحان کرده اند."
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center"
          subtitleClasses="text-md font-medium"
        >
          مشتریان راضی
        </SectionTitle>
        <TestimonialsSliderLayout2
          testimonials={testimonials}
          swiperParams={{
            breakpoints: {
              768: {
                slidesPerView: 2,
              },
              1025: {
                slidesPerView: 2,
              },
            },
            spaceBetween: 40,
            modules: [Pagination],
            pagination: { clickable: true },
          }}
        />
      </div>
    </section>
  );
};

export default SectionTestimonialsSliderLayout2;
