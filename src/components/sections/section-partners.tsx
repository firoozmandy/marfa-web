import SectionTitle from "./section-title";

const SectionPartners = () => {
  return (
    <section className="relative bg-white pb-56 pt-24 before:absolute before:inset-0 before:bg-gradient-to-t before:from-quaternary before:to-secondary before:opacity-70">
      <img
        src="partners/map.png"
        alt="Partners"
        className="object-cover object-center opacity-50 absolute w-full h-full inset-0"
      />
      <div className="container relative max-w-6xl">
        <SectionTitle
          subtitle="An idea that takes the parts of a structure and turns whole system."
          sectionClasses="mx-auto max-w-xl text-center mb-12"
          titleClasses="mb-3 text-center text-white"
          subtitleClasses="text-md font-medium text-white"
        >
          Join thousands of independent entrepreneurs who tried Margin
        </SectionTitle>
        <div className="flex flex-wrap justify-center">
          <img
            src="partners/1.png"
            alt="partner 1"
            width={173}
            height={103}
            className="m-2 md:m-5"
          />
          <img
            src="partners/2.png"
            alt="partner 2"
            width={173}
            height={103}
            className="m-2 md:m-5"
          />
          <img
            src="partners/3.png"
            alt="partner 3"
            width={173}
            height={103}
            className="m-2 md:m-5"
          />
          <img
            src="partners/4.png"
            alt="partner 4"
            width={173}
            height={103}
            className="m-2 md:m-5"
          />
          <img
            src="partners/5.png"
            alt="partner 5"
            width={173}
            height={103}
            className="m-2 md:m-5"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionPartners;
