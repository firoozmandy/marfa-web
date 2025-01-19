import { motion } from "framer-motion";
import IconBox from "@/components/icon-box";

export const iconBoxes = [
  {
    icon: "icons/medical-research-6506_05214fe4-cb2e-4171-ac03-72168bf2981b.svg",
    title: "تجزیه و تحلیل و تحقیق",
    description:
      "ما همچنین نتایج قابل لمس و تجارت با ارزش بلندمدت قابل اندازه گیری را ارائه می دهیم.",
  },
  {
    icon: "icons/edit-document-4191_913956ad-aac3-4d29-b4ef-061756334d24.svg",
    title: "کپی رایت",
    description:
      "ما همچنین نتایج ملموس و تجارت با ارزش بلندمدت قابل اندازه گیری را ارائه می دهیم.",
  },
  {
    icon: "icons/currency-2634_d41cd9f8-1db2-4236-b082-94568e599e40.svg",
    title: "رشد فروش",
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

const SectionIconBoxes = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {!noTitle && (
          <div className="flex justify-center bg-black">
            <div className="lg:w-3/5 text-center">
              <h2 className="mb-12">
              آیا می خواهید{" "}
                <span className="text-primary">ایجاد ترافیک بیشتر</span>به
                وب سایت شما؟ راه حل را می دانیم.
              </h2>
            </div>
          </div>
        )}

        <div className="gap-4 lg:gap-10 grid grid-cols-1 lg:grid-cols-3">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={iconBox.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <IconBox iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxes;
