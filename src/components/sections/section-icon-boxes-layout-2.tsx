import { motion } from "framer-motion";
import IconBoxLayout2 from "@/components/icon-box-layout-2";
import ContactsLineIcon from "remixicon-react/ContactsLineIcon";
import Message2LineIcon from "remixicon-react/Message2LineIcon";
import ListSettingsLineIcon from "remixicon-react/ListSettingsLineIcon";
import FileTextLineIcon from "remixicon-react/FileTextLineIcon";
import Database2LineIcon from "remixicon-react/Database2LineIcon";
import Key2LineIcon from "remixicon-react/Key2LineIcon";

export const iconBoxes = [
  {
    icon: <ContactsLineIcon className="fill-primary" size={32} />,
    iconBase: "bg-[#FEE8E8]",
    title: "آنالیزهای مشاور",
    description:
      "ارائه راه حل هایی برای بهبود کارایی و حل مسائل شرکت، تجزیه و تحلیل داده های کسب و کار و افزایش سطح درآمد.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FA6262]",
  },
  {
    icon: <Message2LineIcon className="fill-[#44D88D]" size={32} />,
    iconBase: "bg-[#E3F9EE]",
    title: "ممیزی و استراتژی سئو",
    description:
      "ارائه راه حل هایی برای بهبود کارایی و حل مسائل شرکت، تجزیه و تحلیل داده های کسب و کار و افزایش سطح درآمد.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#44D88D]",
  },
  {
    icon: <ListSettingsLineIcon className="fill-[#4C86E7]" size={32} />,
    iconBase: "bg-[#D3E9FF]",
    title: "بهینه سازی سئو روی صفحه",
    description:
      "ارائه راه حل هایی برای بهبود کارایی و حل مسائل شرکت، تجزیه و تحلیل داده های کسب و کار و افزایش سطح درآمد. ",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#4C86E7]",
  },
  {
    icon: <FileTextLineIcon className="fill-[#7444FF]" size={32} />,
    iconBase: "bg-[#EAE3FF]",
    title: "مشاوران و واسطه ها",
    description:
      "ارائه راه حل هایی برای بهبود کارایی و حل مسائل شرکت، تجزیه و تحلیل داده های کسب و کار و افزایش سطح درآمد.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#7444FF]",
  },
  {
    icon: <Database2LineIcon className="fill-[#FFAF13]" size={32} />,
    iconBase: "bg-[#FFF3DC]",
    title: "بازاریابی رسانه های اجتماعی",
    description:
      "ارائه راه حل هایی برای بهبود کارایی و حل مسائل شرکت، تجزیه و تحلیل داده های کسب و کار و افزایش سطح درآمد.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#FFAF13]",
  },
  {
    icon: <Key2LineIcon className="fill-[#B939E5]" size={32} />,
    iconBase: "bg-[#FAF1FF]",
    title: "امنیت شبکه",
    description:
      "ارائه راه حل هایی برای بهبود کارایی و حل مسائل شرکت، تجزیه و تحلیل داده های کسب و کار و افزایش سطح درآمد.",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#B939E5]",
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

const SectionIconBoxesLayout2 = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="lg:w-3/5 text-center">
            <h2 className="mb-12">
              آیا شما دوست دارید{" "}
              <span className="text-primary">ترافیک بیشتری </span>
              در وب سایت شما ایجاد شود؟ ما راه حل آن را می دانیم
            </h2>
          </div>
        </div>
        <div className="gap-6 lg:gap-10 grid grid-cols-1 lg:grid-cols-3">
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
                <IconBoxLayout2 iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxesLayout2;
