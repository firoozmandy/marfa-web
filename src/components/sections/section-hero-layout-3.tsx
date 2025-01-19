import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const SectionHeroLayout3 = () => {
  return (
    <div className="relative bg-white dark:bg-transparent overflow-hidden">
      <img
        src="hero/gradient_creative.png"
        className="absolute inset-0 dark:hidden w-full h-full"
        sizes="100vw"
        alt="consulting hero gradient"
      />
      <img
        src="hero/gradient_creative_dark.png"
        className="dark:block absolute inset-0 hidden w-full h-full"
        alt="consulting hero gradient"
      />
      <section className="pt-28 md:pt-32 lg:pt-36 pb-16 lg:pb-40">
        <div className="relative z-10 container">
          <div className="flex flex-wrap lg:justify-center lg:items-center md:gap-20 lg:space-x-5 -ml-96 lg:le-nowrap">
            {/* right */}
            <div className="mb-12 lg:mb-0 lg:w-2/5">
              <h1 className="text-3xl text-headings md:text-4xl lg:text-5xl xl:text-7xl">
               <span className="inline-block relative before:bottom-3 before:-z-[1] before:absolute before:bg-primary before:bg-gradient-to-l before:from-primary before:to-tertiary before:opacity-70 before:rounded-lg before:w-full before:h-2">
                 رشد شرکت
                </span>
                {"  "}را بالا ببرید  
              </h1>
              <p className="mb-10 text-xl">
                روی محتوای جذاب و قابل استفاده مجددا تمرکز کنید چون هزینه را
                کاهش می دهد
              </p>
              <Button size="lg">
                شروع کنید
                
                <ChevronRightIcon
                  width={20}
                  height={20}
                  className="mr-4 -ml-2 rotate-180"
                />
              </Button>
            </div>
             {/* left */}
            <div className="relative lg:text-right w-full lg:w-1/2 text-center">
                   {/* rlj 150% left */}
              <div className="bottom-[10%] -left-[15%] md:left-[18%] absolute bg-white shadow-sm p-4 pr-11 rounded-[4rem] animate-fly s">
                <div className="flex gap-4">
                  <span className="inline-flex justify-center items-center bg-[#D3E9FF] rounded-full w-12 h-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 fill-[#007FFF]"
                    >
                      <path d="M4.41085 14.5259L7.81249 11.1243L10.6409 13.9527L13.7978 10.7958L12.0049 9.00293H17.0049V14.0029L15.212 12.21L10.6409 16.7811L7.81249 13.9527L5.33834 16.4268C6.77158 18.5823 9.22233 20.0029 12.0049 20.0029C16.4232 20.0029 20.0049 16.4212 20.0049 12.0029C20.0049 7.58465 16.4232 4.00293 12.0049 4.00293C7.5866 4.00293 4.00488 7.58465 4.00488 12.0029C4.00488 12.8845 4.14747 13.7327 4.41085 14.5259ZM2.87288 16.0841L2.86275 16.074L2.86662 16.0701C2.31276 14.8276 2.00488 13.4512 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029C7.93574 22.0029 4.43426 19.5725 2.87288 16.0841Z"></path>
                    </svg>
                  </span>
                  <div className="text-foreground">
                    <span className="block font-medium text-left text-xs">
                      بیشترین ترافیک سازمانی
                    </span>
                    <span className="block font-bold text-2xl leading-none">
                      150%
                    </span>
                  </div>
                </div>
              </div>
              {/* pic$ & ... */}
             <div className="ml-0">
                <img
                    src="/public/freepik/21.avif"
                    // width={600}
                    // height={600}
                    alt="consulting hero"
                    className="max-w-[430px] max-h-[430px] top-4 inline-block ml-40 rounded-full"
                  />
                  <div className="top-1/4 right-[2%] lg:-right-[13%] absolute bg-white shadow-sm p-4 pl-11 rounded-[4rem] animate-fly">
                    <div className="flex gap-4">
                      <div className="text-foreground text-left">
                        <span className="block font-medium text-xs">
                          ایده های قابل قبول
                        </span>
                        <span className="block font-bold text-2xl leading-none">
                          86%
                        </span>
                      </div>
                      <span className="inline-flex justify-center items-center bg-[#E3F9EE] rounded-full w-12 h-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-6 h-6 fill-[#44D88D]"
                        >
                          <path d="M21 4V6H20L15 13.5V22H9V13.5L4 6H3V4H21ZM6.4037 6L11 12.8944V20H13V12.8944L17.5963 6H6.4037Z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="-right-[5%] sm:-right-[10%] bottom-0 sm:bottom-0 absolute bg-white shadow-sm p-8 rounded-xl animate-fly">
                    <div className="text-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="top-8 right-8 absolute fill-[#EF4444]"
                      >
                        <path fill="none" d="M0 0H24V24H0z" />
                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
                      </svg>
                      <span className="block font-medium text-foreground text-xs">
                        رضایت مشتری ها
                      </span>
                      <span className="block mb-4 font-bold text-2xl text-foreground">
                        +10k
                      </span>
                      <img
                        src="happy_customers.png"
                        alt="happy customers"
                        width={152}
                        height={24}
                      />
                    </div>
                  </div>
             </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionHeroLayout3;
