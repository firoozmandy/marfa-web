import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SiteLogo from "./site-logo";
import MainNav from "./main-nav";
import { DarkModeSwitch } from "../dark-mode-switch";
import { mainNav } from "../../config/site";
import { cn } from "../../lib/utils";
import { MobileNav } from "./mobile-nav";

const Header = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);

    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  const stickyHeader = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      windowHeight > 10
        ? setStickyClass("bg-white dark:bg-slate-900 lg:py-3 py-3")
        : setStickyClass("");
    }
  };

  return (
    <>
      <header className="top-0 z-20 fixed w-full">
        <div
          className={cn(
            "flex items-center px-4 py-5 transition-all lg:py-12 xl:px-20",
            stickyClass,
          )}
        >
          <Link to="/" className="mr-12 shrink-0">
            <SiteLogo
              width={123}
              height={39}
              lightClasses="w-4/5 dark:hidden lg:w-auto"
              darkClasses="hidden w-4/5 dark:block lg:w-auto"
            />
          </Link>

          <div className="relative flex lg:justify-between items-center lg:bg-transparent w-full">
            
              <MainNav items={mainNav} />
              <MobileNav mainNavItems={mainNav} />
            
            

            <div  className="flex flex-row gap-10">
              <div className="lg:inline-block hidden lg:ml-to">
                <a
                  href="tel:09055914451"
                  className="inline-block bg-gradient-to-l from-primary to-tertiary px-4 py-2.5 rounded-md font-bold text-center text-white"
                >
                  <span className="block text-xxs"> با ما تماس بگیرید</span>
                  <span className="text-md">09199270177</span>
                </a>
              </div>
              <DarkModeSwitch />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
