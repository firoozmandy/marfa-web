import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionIconBoxes from "@/components/sections/section-icon-boxes";
import SectionCTALayout4 from "@/components/sections/section-cta-layout-4";
import SectionPromoVideo from "@/components/sections/section-promo-video";
import SectionIconBoxesLayout3 from "@/components/sections/section-icon-boxes-layout-3";
import { Helmet } from "react-helmet";

const Services = useFramerTransition(
  <>
    <Helmet>
      <title>خدمات</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle subtitle="ما در اینجا خدمات مختلفی را ارائه می دهیم تا شما کارتان را شروع کرده و با استفاده از Marfa هر نیازی را با موفقیت برطرف کنید. خدماتی را انتخاب کنید که برای شما مناسب است.">
        خدمات ما
      </SectionPageTitle>
      <SectionIconBoxes noTitle />
      <SectionPromoVideo />
      <SectionIconBoxesLayout3 />
      <SectionCTALayout4 />
    </main>
  </>,
);

export default Services
