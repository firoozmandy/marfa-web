import useFramerTransition from "@/hooks/use-transition";
import SectionHeroLayout3 from "@/components/sections/section-hero-layout-3";
import SectionPartnersLayout2 from "@/components/sections/section-partners-layout-2";
import SectionBenefits from "@/components/sections/section-benefits";
import SectionIconBoxesLayout2 from "@/components/sections/section-icon-boxes-layout-2";
import SectionTestimonialsSliderLayout2 from "@/components/sections/section-testimonials-slider-layout-2";
import SectionFAQ from "@/components/sections/section-faq";
import SectionCTALayout3 from "@/components/sections/section-cta-layout-3";
import { Helmet } from "react-helmet";

const HomeConsulting = useFramerTransition(
  <>
    <Helmet>
      <title>Home Consulting</title>
    </Helmet>
    <main className="relative">
      {/* کامپوننت های صفحه اول */}
      <SectionHeroLayout3 />
      <SectionPartnersLayout2 />
      <SectionBenefits />
      <SectionIconBoxesLayout2 />
      <SectionTestimonialsSliderLayout2 />
      <SectionFAQ />
      <SectionCTALayout3 />
    </main>
  </>,
);

export default HomeConsulting;
