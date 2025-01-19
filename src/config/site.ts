export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Margin React",
  description: "Margin is the React template for Marketing and SEO agencies.",
};

export const mainNav = [
  {
    title: "وبلاگ ها",
    items: [
      {
        title: "لیست وبلاگ ",
        href: "/blog",
        items: [],
      },
      {
        title: "پست تنها",
        href: "/single-post",
        items: [],
      },
    ],
  },

  {
    title: "صفحه",
    items: [
      {
        title: "درباره ما",
        href: "/about",
        items: [],
      },
      {
        title: "خدمات",
        href: "/services",
        items: [],
      },
      {
        title: "هزینه",
        href: "/pricing",
        items: [],
      },
      {
        title: "ارتیاط با ما",
        href: "/contact",
        items: [],
      },
      {
        title: "404",
        href: "/page-404",
        items: [],
      },
    ],
  },
  {
    title: "پروژه ها",
    items: [
      {
        title: "لیست پروژه ها",
        href: "/projects",
        items: [],
      },
      {
        title: "پروژه تنها ",
        href: "/single-project",
        items: [],
      },
    ],
  },
  {
    title: "خانه",
    href: "/",
  },
] satisfies MainNavItem[];

export const footerNav = [
  {
    title: "منابع",
    items: [
      {
        title: "درباره ما",
        href: "/about",
        external: false,
      },
      {
        title: "خدمات",
        href: "/services",
        external: false,
      },
      {
        title: "هرینه",
        href: "/pricing",
        external: false,
      },
      {
        title: "بلاگ ها",
        href: "/posts",
        external: false,
      },
      {
        title: "ارتباط با ما",
        href: "/contact",
        external: false,
      },
    ],
  },
  {
    title: "راه حل ها",
    items: [
      {
        title: "استراتژی بازاریابی",
        href: "#",
        external: false,
      },
      {
        title: "تبلیغات",
        href: "#",
        external: false,
      },
      {
        title: "SMM",
        href: "#",
        external: false,
      },
      {
        title: "SEO",
        href: "#",
        external: false,
      },
      {
        title: "Google Ads",
        href: "#",
        external: false,
      },
    ],
  },
] satisfies FooterItem[];

export const footerNav2 = [
  {
    title: "Solutions",
    items: [
      {
        title: "SEO Marketing",
        href: "#",
        external: false,
      },
      {
        title: "Search engine optimization",
        href: "#",
        external: false,
      },
      {
        title: "Email marketing",
        href: "#",
        external: false,
      },
      {
        title: "Social Media",
        href: "#",
        external: false,
      },
      {
        title: "Conversion rate optimization",
        href: "#",
        external: false,
      },
    ],
  },
  {
    title: "Quick Links",
    items: [
      {
        title: "Marketing Strategy",
        href: "#",
        external: false,
      },
      {
        title: "Keyword Research Explained",
        href: "#",
        external: false,
      },
      {
        title: "Why SEO Matters",
        href: "#",
        external: false,
      },
      {
        title: "Google Ads",
        href: "#",
        external: false,
      },
    ],
  },
  {
    title: "شرکت مارفا",
    items: [
      {
        title: "درباره شرکت ",
        href: "/about",
        external: false,
      },
      {
        title: "خدمات & هزینه",
        href: "/services",
        external: false,
      },
      {
        title: "سئو  & اخبار",
        href: "/posts",
        external: false,
      },
      {
        title: "ارتباط ",
        href: "/contact",
        external: false,
      },
    ],
  },
] satisfies FooterItem[];
