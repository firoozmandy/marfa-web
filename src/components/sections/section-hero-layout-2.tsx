import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const SectionHeroLayout2 = () => {
  return (
    <div className="relative">
      <img
        src="hero/margin_home_2_hero-min.jpg"
        alt="Margin SEO agency"
        className="object-cover object-center absolute w-full h-full inset-0"
      />
      <section className="pb-24 pt-24 lg:pb-40 lg:pt-36">
        <div className="container relative">
          <div className="mx-auto text-center lg:w-[45%]">
            <h1 className="text-3xl text-white sm:text-5xl xl:text-6xl">
              Grow Your Website{" "}
              <span className="inline-block bg-gradient-to-l from-primary to-tertiary bg-clip-text text-transparent">
                Traffic and Sales
              </span>
            </h1>
            <p className="mx-auto mb-7 max-w-xs text-md text-white">
              We are experts in engaging audiences and converting click to
              customers
            </p>
            <Link to="/contact">
              <Button size={"lg"}>
                Get My Free Proposal
                <ChevronRightIcon width={20} height={20} className="-mr-2 ml-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionHeroLayout2;
