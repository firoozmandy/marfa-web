import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    title: "مشاوره مالیاتی و حقوقی چیست؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
  },
  {
    title: "تیم فنی مشتاق؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
  },
  {
    title: "آیا گارانتی و خدمات پس از فروش می دهید؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
  },
];

const SectionFAQ = () => {
  return (
    <section className="relative dark:bg-slate-900 py-24 lg:py-32 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
          {/* div left*/}
          <div className="lg:pr-10 lg:w-[45%]">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
            >
              <h2>سوالات متداول</h2>
              <p className="mb-8 text-lg">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
              <Accordion
                type="multiple"
                defaultValue={[accordionItems[0].title]}
                className="mx-auto w-full"
              >
                {accordionItems?.map((item, index) => (
                  <AccordionItem value={item.title} key={index}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {item.content}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <span className="inline-block mt-14 text-md">
                <a
                  href="marya.firooz.1380@gmail.com"
                  className="text-primary"
                >
                  marya.firooz.1380@gmail.com

                </a>
              هر سوالی داری بپرس؟{" "}
              </span>
            </motion.div>
          </div>
          {/* div r */}

          <div className="relative z-[1] mb-10 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
            >
              <img
                src="circles_pattern_2.png"
                alt="circles pattern"
                width={526}
                height={531}
                className="top-4 right-10 -z-[1] absolute dark:opacity-10 -translate-y-8 scale-110"
              />
              <div className="md:flex lg:justify-end md:space-x-8 mt-12">
                <img
                  src="/public/freepik/4.avif"
                  alt="benefits"
                  width={320}
                  height={320}
                  className="inline-block mb-8 rounded-xl"
                />
                <div className="relative bg-white bg-gradient-to-b from-secondary/70 to-quaternary/70 shadow-lg mb-8 p-8 rounded-xl max-w-[13.125rem] self-end">
                  <span className="block mb-4 font-semibold text-base text-white">
                    سرمایه گذاران انفرادی
                  </span>
                  <span className="block mb-4 font-bold text-3xl text-white">
                    7,00+
                  </span>
                  <span className="block text-base text-white">
                    همین الان انجامش بده.
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="relative bg-white bg-gradient-to-l from-primary/70 to-tertiary/70 shadow-lg mx-auto p-8 rounded-xl max-w-xs self-start">
                  <div className="top-8 right-8 absolute bg-white p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="fill-primary"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M4.406 14.523l3.402-3.402 2.828 2.829 3.157-3.157L12 9h5v5l-1.793-1.793-4.571 4.571-2.828-2.828-2.475 2.474a8 8 0 1 0-.927-1.9zm-1.538 1.558l-.01-.01.004-.004A9.965 9.965 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-4.07 0-7.57-2.43-9.132-5.919z"></path>
                    </svg>
                  </div>

                  <div className="text-left">
                    <span className="block mb-4 font-semibold text-base text-white">
                      تا به امروز سرمایه گذاری شده است
                    </span>
                    <span className="block mb-4 font-bold text-3xl text-white">
                      $3m
                    </span>
                    <span className="block text-base text-white">
                      اما این کار را در زمان خودش انجام دهید.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFAQ;
