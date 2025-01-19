import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play } from "@/components/icons/icons";

const SectionBenefits = () => {
  return (
    <section className="relative dark:bg-slate-900 bg-gradient-to-b from-[#EBE4FA]/25 to-muted/25 dark:bg-none py-24 lg:py-32 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
          {/* right */}
          <div className="relative z-[1] mb-10 lg:w-1/2">
            <img
              src="circles_pattern.png"
              alt="circles pattern"
              width={640}
              height={561}
              className="-z-[1] absolute dark:opacity-10 -translate-y-8 scale-110"
            />
            <img
              src="/public/freepik/31.avif"
              alt="benefits"
              width={640}
              height={640}
              className="rounded-xl"
            />
            <div className="top-1/2 -left-10 absolute rounded-xl w-1/2 lg:w-auto animate-fly">
              <img
                src="/public/freepik/6.avif"
                alt="benefits"
                width={220}
                height={220}
                className="rounded-xl"
              />
              <Dialog>
                <DialogTrigger className="top-1/2 left-1/2 absolute will-change-transform transition-transform -translate-x-1/2 -translate-y-1/2 hover:scale-90">
                  <Play />
                </DialogTrigger>
                <DialogContent className="border-0 p-0 max-w-5xl">
                  <DialogHeader>
                    <AspectRatio
                      ratio={16 / 9}
                      className="rounded-lg overflow-hidden"
                    >
                      <iframe
                        className="w-full h-full"
                        src="https://s32.picofile.com/file/8482001326/game.mp4.html"
                        allow="autoplay"
                      ></iframe>
                    </AspectRatio>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {/* left */}
          <div className="lg:pl-10 lg:w-2/5">
            <h2 className="max-w-sm">
              شما می توانید در زمان و پول خود در کسب و کار خود صرفه جویی کنید
            </h2>
            <p className="mb-8 text-lg">
              همانطور که می دانید، چیزهای زیادی وجود دارد برای کمک به افزایش
              فروش که می توانید در سایت خود اجرا کنید.
            </p>
            <div className="flex gap-2 space-x-5 mb-6">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 fill-green shrink-0"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
              </svg>
              
              <div>
                <h3 className="mb-3 text-base"> مدیریت تیم</h3>
                <p className="text-base">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>
              </div>
              
            </div>
            <div className="flex gap-2 space-x-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 fill-green shrink-0"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
              </svg>
              <div>
                <h3 className="mb-3 text-base">پرداخت های مبتنی بر درآمد</h3>
                <p className="text-base">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBenefits;
