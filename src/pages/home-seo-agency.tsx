import useFramerTransition from "@/hooks/use-transition";
import SectionQuotation from "@/components/sections/section-quotation";
import SectionHeroLayout2 from "@/components/sections/section-hero-layout-2";
import SectionServiceTabs from "@/components/sections/section-service-tabs";
import SectionSertificationsPartners from "@/components/sections/section-certifications-partners";
import SectionProjectsSlider from "@/components/sections/section-projects-slider";
import SectionCTALayout2 from "@/components/sections/section-cta-layout-2";
import SectionTestimonials from "@/components/sections/section-testimonials";
import SectionResults from "@/components/sections/section-results";
import { Helmet } from "react-helmet";

const HomeSEOAgency = useFramerTransition(
  <>
    <Helmet>
      <title>Home SEO Agency</title>
    </Helmet>
    <main className="relative mt-[4.5rem] lg:mt-[161px]">
      <SectionHeroLayout2 />
      <SectionServiceTabs />
      <SectionSertificationsPartners />
      <SectionProjectsSlider />
      <SectionCTALayout2 />
      <SectionTestimonials />
      <SectionResults />
      <SectionQuotation />
    </main>
  </>,
);

export default HomeSEOAgency;
