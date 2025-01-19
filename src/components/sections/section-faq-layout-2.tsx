import SectionTitle from "./section-title";

const faqCol1 = [
  {
    title: "آزمایشی 14 روزه",
    content:
      "افراد ردیابی ماهانه بازدیدکنندگان منحصر به فردی هستند که در رویدادی در وب سایت شما یا محصول شما شرکت می کنند که توسط شما در حاشیه ردیابی می شود. درباره Margin Analyze بیشتر بیاموزید تا ببینید رویدادها و ویژگی‌ها چگونه با هم کار می‌کنند تا بتوانید بینشی نسبت به کارهایی که افراد انجام می‌دهند به دست آورید..",
  },
  {
    title: "بازیابی اکانت منقضی شده",
    content:
      "در حالی که گاهی اوقات کار با مشتریان احتمالی به صورت آزمایشی منطقی به نظر می رسد، اطمینان از اینکه آنها در نهایت می توانند خدمات شما را بپردازند، در هنگام واجد شرایط بودن یک سرنخ بسیار مهم است.",
  },
  {
    title: "آیا آنها شهرت خوبی دارند؟",
    content:
      "مشتریان با سابقه پرداخت خوب که کار کردن با آنها آسان است، در زمان و استرس شما صرفه جویی می کنند و روابط تجاری بسیار بهتری را ایجاد می کنند.",
  },
];

const faqCol2 = [
  {
    title: "چگونه می توانم اشتراک خود را لغو کنم؟",
    content:
      "افراد ردیابی ماهانه بازدیدکنندگان منحصر به فردی هستند که در رویدادی در وب سایت شما یا محصول شما شرکت می کنند که توسط شما در حاشیه ردیابی می شود. درباره Margin Analyze بیشتر بیاموزید تا ببینید رویدادها و ویژگی‌ها چگونه با هم کار می‌کنند تا بتوانید بینشی نسبت به همه کارهایی که افراد انجام می‌دهند به دست آورید.",
  },
  {
    title: "چه عناصری از پیشنهادات شما برای من مناسب است؟",
    content:
      "در حالی که گاهی اوقات کار با مشتریان احتمالی به صورت آزمایشی منطقی به نظر می رسد، اطمینان از اینکه آنها در نهایت می توانند خدمات شما را بپردازند، در هنگام واجد شرایط بودن یک سرنخ بسیار مهم است.",
  },
  {
    title: "What is Campaigns?",
    content:
      "مشتریان با سابقه پرداخت خوب که کار کردن با آنها آسان است، در زمان و استرس شما صرفه جویی می کنند و روابط تجاری بسیار بهتری را ایجاد می کنند.",
  },
];

const SectionFAQLayout2 = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionTitle
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center"
          subtitleClasses="text-md font-medium"
        >
         سوالات متداول
        </SectionTitle>
        <div className="flex flex-wrap lg:flex-nowrap lg:space-x-10">
          <div className="w-full lg:w-1/2">
            {faqCol1.map(({ title, content }, index) => (
              <div key={index} className="mb-12">
                {title && <h3 className="mb-4 text-md">{title}</h3>}
                {content && <p>{content}</p>}
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2">
            {faqCol2.map(({ title, content }, index) => (
              <div key={index} className="mb-12">
                {title && <h3 className="mb-4 text-md">{title}</h3>}
                {content && <p>{content}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 text-center text-lg">
          هر سوالی بپرس؟{" "}
          <a href="mailto:support@margin.com" className="text-primary">
            marfa@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionFAQLayout2;
