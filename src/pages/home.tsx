import useFramerTransition from "@/hooks/use-transition";
import SectionHero from "@/components/sections/section-hero";
import SectionIconBoxes from "@/components/sections/section-icon-boxes";
import SectionLatestNews from "@/components/sections/section-latest-news";
import SectionPartners from "@/components/sections/section-partners";
import SectionPromo from "@/components/sections/section-promo";
import SectionTestimonialsSlider from "@/components/sections/section-testimonials-slider";
import SectionCTA from "@/components/sections/section-cta";
import {Helmet} from "react-helmet"

const Home = useFramerTransition(
	<>
		<Helmet>
			<title>Margin React Template</title>
		</Helmet>
		<main className="relative">
			<SectionHero />
			<SectionIconBoxes />
			<SectionPromo />
      <SectionTestimonialsSlider />
			<SectionLatestNews />
			<SectionPartners />
			<SectionCTA />
		</main>
	</>
)

export default Home