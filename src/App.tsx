import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BackToTop from "@/components/back-to-top";
import ScrollToTop from "@/components/scroll-to-top";
import { Toaster } from "sonner";
import Loading from "@/components/loading";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Header = lazy(() => import("@/components/layout/header"));
const Footer = lazy(() => import("@/components/layout/footer"));
const HeaderLayout2 = lazy(() => import("@/components/layout/header-layout-2"));
const FooterLayout2 = lazy(() => import("@/components/layout/footer-layout-2"));

const Home = lazy(() => import("./pages/home-consulting"));
const HomeConsulting = lazy(() => import("./pages/home-consulting"));
const Projects = lazy(() => import("./pages/projects"));
const Blog = lazy(() => import("./pages/blog"));
// const SinglePost = lazy(() => import("./pages/single-post"));
const SingleProject = lazy(() => import("./pages/single-project"));
const About = lazy(() => import("./pages/about"));
const Services = lazy(() => import("./pages/services"));
const Pricing = lazy(() => import("./pages/pricing"));
const Contact = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/not-found"));

const queryClient = new QueryClient();

function App() {
  const location = useLocation();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading />}>
          {location.pathname === "/consulting" ? <HeaderLayout2 /> : <Header />}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/" element={<HomeConsulting />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              {/* <Route path="/single-project" element={<SingleProject />} /> */}
              {/* <Route path="/single-post" element={<SinglePost />} /> */}
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          {location.pathname === "/consulting" ? <FooterLayout2 /> : <Footer />}
          <Toaster richColors />
          <BackToTop />
          <ScrollToTop />
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
