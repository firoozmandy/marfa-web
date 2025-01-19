import PromoTriangle from "@/components/promo-triangle";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const SectionPromo = () => {
  return (
    <section className="relative pb-28 pt-10 lg:pb-64 lg:pt-24">
      <PromoTriangle />
      <div className="container">
        <div className="lg:ml-auto lg:w-[45%]">
          <h2 className="max-w-md">
            Is your website driving sales for your business?
          </h2>
          <p className="mb-10 text-lg">
            As you may already know, there are an infinite number of things you
            can test on your site to help you increase sales. From layout to
            copy to design, there are limitless combinations of changes that may
            improve your visitor-to-sale conversion rate. But what&apos;s
            &quot;enough&quot; when you&apos;re just starting out? What elements
            should you focus on testing before rolling out your traffic
            campaign?
          </p>
          <Button>
            Get Started
            <ChevronRightIcon width={20} height={20} className="-mr-2 ml-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionPromo;
