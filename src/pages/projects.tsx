import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
import ProjectList from "@/components/projects/project-list";
import { Helmet } from "react-helmet";

const Projects = useFramerTransition(
  <>
    <Helmet>
      <title>Projects</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle 
        subtitle="روی محتوای جذاب و قابل استفاده مجدد تمرکز کنید که هزینه هر سرنخ را کاهش می دهد
				در حالی که به شما کمک می کند مارفاسود را افزایش دهید. مارفاتلاش می کند تا
				ارائه ابزارها و پشتیبانی که به رشد شرکت ها کمک می کند
				موفقیت بی نظیر"
      >
       پروژه ها
      </SectionPageTitle>
      <section className="py-24 border-b">
        <div className="container">
          <ProjectList
            grid="md:grid-cols-2 lg:grid-cols-2 gap-12"
            limit={4}
            showPagination={true}
          />
        </div>
      </section>
    </main>
  </>,
);

export default Projects;
