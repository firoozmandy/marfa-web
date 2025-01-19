import { Link } from "react-router-dom";
import SiteLogo from "./site-logo";
import { Email, Address } from "@/components/icons/icons";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { footerNav2 } from "@/config/site";
import NewsletterFormLayout2 from "../forms/newsletter-form-layout-2";

const FooterLayout2 = () => {
  return (
    <footer>
      <div className="py-9">
        <div className="container">
          <div className="gap-10 space-y-5 md:grid md:grid-cols-12 md:space-y-0">
            <div className="col-span-3 self-center">
              <Link to="/" className="shrink-0">
                <SiteLogo
                  width={123}
                  height={39}
                  lightClasses="dark:hidden"
                  darkClasses="hidden dark:block"
                />
              </Link>
            </div>
            <div className="col-span-4 col-start-4 lg:col-span-3 lg:col-start-7">
              <div className="flex space-x-4">
                <Email width="32" height="32" className="h-8 w-8" />
                <div>
                  <a href="tel:18881554456" className="block text-md">
                    +1-888-1554-456
                  </a>
                  <a
                    href="mailto:hello@margin.com"
                    className="hover:text-primary"
                  >
                    hello@margin.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-4 lg:col-span-3">
              <div className="flex space-x-4">
                <Address width="32" height="32" className="h-8 w-8" />
                <address className="-mt-px leading-6">
                  8910 University Center Lane Suite 620 San Diego, CA 92102
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t pb-16 pt-12">
        <div className="container">
          <div className="gap-10 space-y-10 md:grid md:grid-cols-12 md:space-y-0">
            {footerNav2 &&
              footerNav2.map((item) => (
                <div key={item.title} className="col-span-3">
                  <h2 className="mb-4 text-sm">{item.title}</h2>
                  <NavigationMenu orientation="vertical">
                    <NavigationMenuList className="flex-col items-start space-y-2">
                      {item.items.map((link) => (
                        <NavigationMenuItem
                          key={link.title}
                          className="text-sm"
                        >
                          <Link
                            to={link.href}
                            target={link?.external ? "_blank" : undefined}
                            rel={link?.external ? "noreferrer" : undefined}
                            className="block hover:text-primary"
                          >
                            {link.title}
                          </Link>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              ))}
            <div className="col-span-3">
              <h2 className="mb-4 text-sm">Subscribe</h2>
              <p className="mb-6 text-sm">
                Join the newsletter to get the daily tips and free stuffs
                delivered directly to your inbox.
              </p>
              <NewsletterFormLayout2 />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-12">
        <div className="container text-center">
          <span className="text-xs">
            © {new Date().getFullYear()} Margin React, Made by{" "}
            <a href="https://deothemes.com" className="hover:text-primary">
              DeoThemes
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout2;
