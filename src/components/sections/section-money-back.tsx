const SectionMoneyBack = () => {
  return (
    <section className="pt-10">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="relative bg-[#FFFEF6] dark:bg-slate-800 shadow-[0_1px_6px_#EDEBDB] dark:shadow-slate-850/20 px-16 pt-20 pb-12 rounded-md text-center">
            <img
              src="moneyback_badge@2x.png"
              width={100}
              height={100}
              className="inline-block top-0 absolute -translate-x-1/2 -translate-y-1/2"
              alt="money back"
            />
            <h2 className="mb-4">
              <span className="text-primary">100%</span> ضمانت برگشت پول
            </h2>
            <p className="font-medium text-md">
            با اطمینان خرید کنید: اگر 100% از مارفا راضی نیستید و
            خدمات کامل ما، ما 30 روز ضمانت بازگشت پول را بدون ارائه می دهیم
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMoneyBack;
