import { motion } from "framer-motion";
import SectionTitle from "./section-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { cn } from "@/lib/utils";

export const team = [
  {
    image: "team/1.jpg",
    name: "بهراد بتوان",
    position: "CEO",
    description:
      "این یک واقعیت ثابت شده است که خواننده هنگام تماشای طرح بندی آن، با محتوای قابل خواندن یک صفحه، حواسش پرت می شود. نکته استفاده از Lorem Ipsum این است که دارای توزیع کم و بیش نرمال حروف است.",
    socials: [
      {
        icon: faXTwitter,
        color: "bg-black",
        url: "#",
      },
      {
        icon: faFacebook,
        color: "bg-[#324e8c]",
        url: "#",
      },
      {
        icon: faLinkedin,
        color: "bg-[#0a66c2]",
        url: "#",
      },
    ],
  },
  {
    image: "team/2.jpg",
    name: "بهار بتوان",
    position: "Back End",
    description:
      "این یک واقعیت ثابت شده است که خواننده هنگام تماشای طرح بندی آن، با محتوای قابل خواندن یک صفحه، حواسش پرت می شود. نکته استفاده از Lorem Ipsum این است که دارای توزیع کم و بیش نرمال حروف است.",
    socials: [
      {
        icon: faYoutube,
        color: "bg-[#cd201f]",
        url: "#",
      },
      {
        icon: faFacebook,
        color: "bg-[#324e8c]",
        url: "#",
      },
      {
        icon: faLinkedin,
        color: "bg-[#0a66c2]",
        url: "#",
      },
    ],
  },
  {
    image: "team/3.jpg",
    name: "آریو رضایی",
    position: "Developer",
    description:
      "این یک واقعیت ثابت شده است که خواننده هنگام تماشای طرح بندی آن، با محتوای قابل خواندن یک صفحه، حواسش پرت می شود. نکته استفاده از Lorem Ipsum این است که دارای توزیع کم و بیش نرمال حروف است.",
    socials: [
      {
        icon: faGithub,
        color: "bg-[#333]",
        url: "#",
      },
      {
        icon: faFacebook,
        color: "bg-[#324e8c]",
        url: "#",
      },
      {
        icon: faLinkedin,
        color: "bg-[#0a66c2]",
        url: "#",
      },
    ],
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

const SectionTeam = () => {
  return (
    <section className="py-16 lg:py-28">
      <div className="container">
        <SectionTitle
          subtitle="مارفا در تلاش است تا ابزارها و پشتیبانی هایی را ارائه دهد که به شرکت ها کمک می کند تا با موفقیتی بی نظیر رشد کنند."
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center"
          subtitleClasses="text-md font-medium"
        >
         با کارشناسان ما آشنا شوید.
        </SectionTitle>
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {team.map((item, index) => (
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
              <img
                src={item.image}
                alt={item.name}
                width={400}
                height={250}
                className="mb-6 rounded"
              />
              {item.name && <h3 className="mb-1">{item.name}</h3>}
              {item.position && (
                <span className="font-bold text-slate-400 text-sm dark:text-slate-300">
                  {item.position}
                </span>
              )}
              {item.description && <p className="my-5">{item.description}</p>}
              {item.socials && (
                <div className="flex space-x-2">
                  {item.socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={cn(
                        "mb-2 flex h-10 w-10 items-center justify-center rounded text-white transition-colors hover:bg-foreground hover:text-white",
                        social.color,
                      )}
                    >
                      <FontAwesomeIcon icon={social.icon} width={15} />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;
