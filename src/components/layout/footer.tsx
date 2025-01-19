import { Link } from "react-router-dom";
import SiteLogo from "./site-logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { footerNav } from "@/config/site";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="pt-28 pb-16">
          <div className="gap-10 space-y-10 md:space-y-0 md:grid md:grid-cols-12">
            <div className="col-span-3">
              <Link to="/" className="shrink-0">
                <SiteLogo
                  width={123}
                  height={39}
                  lightClasses="dark:hidden"
                  darkClasses="hidden dark:block"
                />
              </Link>
              <p className="mt-6 mb-8">
                ابزارهایی برای ساخت موثر برند و رشد کسب و کار شما.
              </p>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="flex justify-center items-center bg-black hover:bg-foreground mb-2 rounded w-10 h-10 text-white hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faXTwitter} width={15} />
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center bg-[#324e8c] hover:bg-foreground mb-2 rounded w-10 h-10 text-white hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faFacebook} width={15} />
                </a>
                <a
                  href="#"
                  className="flex justify-center items-center bg-[#cd201f] hover:bg-foreground mb-2 rounded w-10 h-10 text-white hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faYoutube} width={15} />
                </a>
              </div>
            </div>

            {footerNav &&
              footerNav.map((item, index) => (
                <div
                  key={item.title}
                  className={`${
                    index === 0 ? " xl:col-start-7" : ""
                  } col-span-3   xl:col-span-2`}
                >
                  <h2 className="mb-4 text-sm">{item.title}</h2>
                  <NavigationMenu orientation="vertical">
                    <NavigationMenuList className="flex-col items-end space-y-2">
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
            <div className="col-span-3 xl:col-span-2">
              <h2 className="mb-4 text-sm">شرکت</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <address className="-mt-px leading-6">مازندران ساری</address>
                </li>
                <li>
                  <span>تلفن: </span>
                  <a
                    href="tel:+1-800-1554-456-123"
                    className="hover:text-primary"
                  >
                    09199270177
                  </a>
                </li>
                <li>
                  <span>Email: </span>
                  <a
                    href="arezooshahabi@gmail.com"
                    className="hover:text-primary"
                  >
                    marya.firooz.1380@gmail.com

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 border-t">
        <div className="text-center container">
          <span className="text-xs">
            © {new Date().getFullYear()} marfa, Made by{" "}
            <a href="#" className="hover:text-primary">
              marfa
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
