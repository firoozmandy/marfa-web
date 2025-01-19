import useFramerTransition from "@/hooks/use-transition";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = useFramerTransition(
  <>
    <Helmet>
      <title>پیدا نشد</title>
    </Helmet>
    <main className="relative">
      <section className="bg-muted dark:bg-slate-900 mt-[4.5rem] lg:mt-[161px] py-32">
        <div className="text-center container">
          <img
            src="not_found.png"
            width={340}
            height={340}
            alt="not found"
            className="inline-block mb-12"
          />
          <h1 className="mb-4"> متاسفیم  این صفحه {`پیدا نشد`}!</h1>
          <p className="mb-12">
          صفحه ای که به دنبال آن هستید منتقل، حذف، تغییر نام داده شده است یا هرگز
            وجود نداشته است.
          </p>
          <div className="flex justify-center gap-3">
          <Button size="lg" asChild>
            <Link to="/">برگشت به خانه</Link>
           
          </Button>
          <Button size="lg" asChild>
            
            <Link to="/projects">برگشت به صفحه قبل</Link>
          </Button>
          </div>
        </div>
      </section>
    </main>
  </>,
);

export default NotFound;
