import { motion } from "framer-motion";
import IconBox from "@/components/icon-box";
import SectionTitle from "./section-title";

export const iconBoxes = [
  {
    icon: "icons/deadline-5926_5778aee2-b372-4b21-94a1-c9fc06ac464c.svg",
    title: "نتایج سریع",
    description:
      "ما همچنین نتایج ملموس و تجارت با ارزش بلندمدت قابل اندازه گیری را ارائه می دهیم.",
  },
  {
    icon: "icons/medal-3141_6860a6ec-597a-49e1-a5d2-dd4b070acef3.svg",
    title: "نمایندگی خوب اجرایی",
    description:
    "ما همچنین نتایج ملموس و تجارت با ارزش بلندمدت قابل اندازه گیری را ارائه می دهیم.",
   
  },
  {
    icon: "icons/medical-research-6506_05214fe4-cb2e-4171-ac03-72168bf2981b.svg",
    title: "تجزیه و تحلیل رقابت",
    description:
    "ما همچنین نتایج ملموس و تجارت با ارزش بلندمدت قابل اندازه گیری را ارائه می دهیم.",

  },
  {
    icon: "icons/customer-support-4912_a5517329-a472-47b5-8155-d507da181405.svg",
    title: "پشتیبانی مشتری دوستانه",
    description:
    "ما همچنین نتایج ملموس و تجارت با ارزش بلندمدت قابل اندازه گیری را ارائه می دهیم.",

  },
  {
    icon: "icons/pay-2643_cf4ecaa0-bcfb-4c2b-91e1-7353cb0dccdd.svg",
    title: "100% ضمانت بازگشت وجه",
    description:
    "ما همچنین نتایج ملموس و تجارت با ارزش بلندمدت قابل اندازه گیری را ارائه می دهیم.",

  },
  {
    icon: "icons/handshake-3124_670c4553-214a-4d06-830f-4d0855736c60.svg",
    title: "وفاداری مشتری",
    description:
    "ما همچنین نتایج ملموس و تجارت با ارزش بلندمدت قابل اندازه گیری را ارائه می دهیم.",

  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SectionIconBoxesLayout3 = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <section className="pt-16 lg:pt-24 pb-10 lg:pb-20">
      <div className="container">
        {!noTitle && (
          <SectionTitle
            subtitle="ما در اینجا خدمات مختلفی را ارائه می دهیم تا شما را شروع کرده و با استفاده از Margin هر نیازی را با موفقیت برطرف کنید."
            sectionClasses="mx-auto max-w-xl text-center mb-12"
            titleClasses="mb-3 text-center"
            subtitleClasses="text-md font-medium"
          >
           6 دلیل اصلی برای اینکه چرا ما بهترین هستیم
          </SectionTitle>
        )}

        <div className="gap-4 lg:gap-10 grid grid-cols-1 lg:grid-cols-3">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <IconBox
                  iconBox={iconBox}
                  className="before:hidden shadow-none py-7 text-center"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxesLayout3;
