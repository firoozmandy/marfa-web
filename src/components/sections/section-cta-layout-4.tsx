import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const SectionCTALayout4 = () => {
  return (
    <section className="bg-muted dark:bg-slate-900 px-6 py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="mb-8">
            مشتریان بیشتری به دست آورید، نگه دارید و رشد دهید. ما اینجا هستیم تا کمک کنیم.
            </h2>

            <Link to="/contact">
              <Button size="lg">
              بیایید با هم کار کنیم
                <ChevronRightIcon width={20} height={20} className="m-4 mr-2 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCTALayout4;
