import CheckLineIcon from "remixicon-react/CheckLineIcon";

const SectionChecklist = () => {
  return (
    <section className="pb-28">
      <div className="relative z-10 -mt-20 container">
        <div className="mx-auto max-w-6xl">
          <div className="bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-850/20 px-6 sm:px-12 py-16 rounded-md text-center">
            <h3 className="mb-6">
            سازمان های فروش قادر به تعیین و مدیریت اهداف کریردی هستند
            </h3>
            <div className="text-right flex flex-wrap md:flex-nowrap md:space-x-10">
              <div className="w-full md:w-1/2">
                <div className="flex mb-1">
                  <CheckLineIcon
                    size={20}
                    className="mt-0.5 mr-1 fill-green shrink-0"
                  />
                  <span className="text-foreground text-md dark:text-slate-400">
                  یک استراتژی جامع جستجوی پولی ایجاد کنید
                  </span>
                </div>
                <div className="flex mb-1">
                  <CheckLineIcon
                    size={20}
                    className="mt-0.5 mr-1 fill-green shrink-0"
                  />
                  <span className="text-foreground text-md dark:text-slate-400">
                  نظارت بر عملکرد در طول هر فروش
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex mb-1">
                  <CheckLineIcon
                    size={20}
                    className="mt-0.5 mr-1 fill-green shrink-0"
                  />
                  <span className="text-foreground text-md dark:text-slate-400">
                  اطمینان حاصل کنید که هر وظیفه به فرد مناسبی محول شده است
                  </span>
                </div>
                <div className="flex mb-1">
                  <CheckLineIcon
                    size={20}
                    className="mt-0.5 mr-1 fill-green shrink-0"
                  />
                  <span className="text-foreground text-md dark:text-slate-400">
                  ارتباطات شفاف را به راحتی می توان مدیریت کرد
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionChecklist;
