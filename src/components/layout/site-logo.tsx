import { siteConfig } from "@/config/site";
import logo from "/public/freepik/logoDark.png";
import logoDark from "/public/freepik/logo2-2.png";

type SiteLogoProps = {
  width: number;
  height: number;
  lightClasses?: string;
  darkClasses?: string;
};

export default function SiteLogo({
  width,
  height,
  lightClasses,
  darkClasses,
}: SiteLogoProps) {
  return (
    <>
      <img
        src={logo}
        className={`${lightClasses}  h-20`}

        width={"width"}
        height={"height"}
        alt={siteConfig.name}
        
      />
      <img
        src={logoDark}
        className={`${darkClasses}  h-36`}
        width={width}
        height={height}
        alt={siteConfig.name}
        
      />
    
    </>
  );
}
