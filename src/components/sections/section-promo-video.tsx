import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const SectionPromoVideo = () => {
  return (
    <section className="bg-muted dark:bg-slate-900 py-16 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap justify-between lg:space-x-10">
          <div className="mb-10 w-full lg:w-[45%]">
            <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
              <iframe
                src="https://s32.picofile.com/file/8482001326/game.mp4.html"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </AspectRatio>
          </div>

          <div className="w-full lg:w-[45%]">
            <h2>
            ابزار مناسب برای راه حل مناسب. تمرکز بر فروش
            فرصت ها
            </h2>
            <p className="mb-10 text-lg">
          این  یک واقعیت ثابت شده است که خواننده با آن جذب می شودا
              محتوای قابل خواندن یک صفحه هنگام مشاهده طرح بندی آن. را
              نکته استفاده از لورم ایپسوم این است که کم و بیش نرمال دارد
              
            </p>
            <Link to="/contact">
              <Button size="lg">
              شروع کنید
                <ChevronRightIcon width={20} height={20} className="mr-2 ml-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPromoVideo;
