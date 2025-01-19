import { Button } from "@/components/ui/button";

export const pricingTables = [
  {
    title: "استاندارد",
    currency: "",
    price: "رایگان",
    term: "",
    description: "یک ابزار ورود برای کسانی که شروع کردند. برای همیشه رایگان.",
    ctaText: "شروع",
    featured: false,
  },
  {
    title: "تجارت",
    currency: "$",
    price: "19.99",
    term: "/ ماه",
    description:
      "طرحی عالی برای طراحان حرفه ای و کاربران کارآفرین.",
    ctaText: "شروع",
    featured: true,
  },
  {
    title: "بیمه",
    currency: "$",
    price: "29.99",
    term: "/ ماه",
    description:
      "برنامه مادام العمر برای طراحان حرفه ای و کاربران کارآفرین.",
    ctaText: "شروع",
    featured: false,
  },
];

const SectionPricingTables = () => {
  const handleClick = (index: number) => {
    console.log(index);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="gap-4 lg:gap-10 grid grid-cols-1 lg:grid-cols-3">
          {pricingTables.map(
            (
              { title, currency, price, term, description, ctaText, featured },
              index,
            ) => (
              <div
                key={index}
                className={`${
                  featured ? "shadow-lg before:w-full" : "before:w-0"
                } hover-shadow z-[1] overflow-hidden rounded-md bg-white px-10 py-12 before:absolute before:left-0 before:top-0 before:block before:h-[.3125rem] before:bg-secondary before:transition-all before:duration-200 hover:before:w-full dark:bg-slate-800`}
              >
                {title && <h3 className="mb-2 text-md">{title}</h3>}
                {currency || price || term ? (
                  <div className="mb-4 text-foreground dark:text-white">
                    {currency && (
                      <span className="inline-block align-top mt-3 mr-1 text-2xl">
                        {currency}
                      </span>
                    )}
                    {price && (
                      <span className="font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter">
                        {price}
                      </span>
                    )}
                    {term && (
                      <span className="inline-block ml-1.5 text-slate-400 text-xl">
                        {term}
                      </span>
                    )}
                  </div>
                ) : null}
                {description && <p className="mb-8 font-bold">{description}</p>}
                {ctaText && (
                  <Button
                    className="w-40"
                    size="lg"
                    onClick={() => handleClick(index)}
                  >
                    {ctaText}
                  </Button>
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionPricingTables;
