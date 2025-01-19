import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionChecklist from "@/components/sections/section-checklist";
import SectionStats from "@/components/sections/section-stats";
import SectionTeam from "@/components/sections/section-team";
import SectionCTALayout4 from "@/components/sections/section-cta-layout-4";
import {Helmet} from "react-helmet"

const About = useFramerTransition(
	<>
		<Helmet>
			<title>درباره ما</title>
		</Helmet>
		<main className="relative">
			<SectionPageTitle
				subtitle="روی محتوای جذاب و قابل استفاده مجدد تمرکز کنید که هزینه هر سرنخ را کاهش می دهد و در عین حال به شما کمک می کند حاشیه سود را افزایش دهید. مارجین در تلاش است تا ابزارها و پشتیبانی هایی را ارائه دهد که به شرکت ها کمک می کند تا با موفقیتی بی نظیر رشد کنند."
			>
				درباره ما
			</SectionPageTitle>
			<SectionChecklist />
			<SectionStats />
			<SectionTeam />
			<SectionCTALayout4 />
		</main>
	</>
)

export default About