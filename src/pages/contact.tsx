import useFramerTransition from "@/hooks/use-transition";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionContactForm from "@/components/sections/section-contact-form";
import { Helmet } from "react-helmet";

const Contact = useFramerTransition(
  <>
    <Helmet>
      <title>ارتباط با ما</title>
    </Helmet>
    <main className="relative">
      <SectionPageTitle subtitle="بیایید در مورد کسب و کار شما بحث کنیم">
        تماس با ما
      </SectionPageTitle>
      <SectionContactForm />
      {/* <SectionGoogleMap /> */}
    </main>
  </>,
);

export default Contact;

