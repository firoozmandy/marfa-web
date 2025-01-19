export const statistics = [
  {
    number: "36",
    title: "پروژه های موفق",
  },
  {
    number: "100%",
    title: "دست یافتن به اهداف",
  },
  {
    number: "550",
    title: "مشتری راضی",
  },
  {
    number: "3x",
    title: "افزایش سود",
  },
];

const SectionStats = () => {
  return (
    <section className="relative after:absolute after:inset-0 after:bg-secondary/80 py-16 lg:py-28">
      <img
        src="statistic.jpg"
        alt="Statistics"
        className="absolute inset-0 w-full h-full object-center object-cover"
      />
      <div className="relative z-[1] container">
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item, index) => (
            <div key={index}>
              {item.number && (
                <span className="block mb-4 font-bold text-3xl text-white">
                  {item.number}
                </span>
              )}
              {item.title && (
                <span className="block font-bold text-md text-white">
                  {item.title}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionStats;
