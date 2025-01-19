import * as React from "react";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface MainNavProps {
  items?: MainNavItem[];
}

export default function MainNav({ items }: MainNavProps) {
  return (
    <>
      <NavigationMenu className="lg:block hidden">
        <NavigationMenuList>
          {items &&
            items.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item?.items ? (
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                ) : (
                  item.href && (
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      href={item.href}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  )
                )}
                {item?.items ? (
                  <NavigationMenuContent>
                    <ul className="flex flex-col gap-3 bg-slate-200 p-4 rounded-md w-[130px] font-bold">
                      {item?.items.map((subItem) => (
                        <ListItem
                          key={subItem.title}
                          href={subItem.href}
                          title={subItem.title}
                        ></ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                ) : null}
              </NavigationMenuItem>
            ))}
          <NavigationMenuIndicator />
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavLink
        to={href || ""}
        ref={ref}
        className={({ isActive }) =>
          cn(
            "block select-none space-y-1 px-3 py-1.5 leading-none no-underline outline-none transition-colors hover:text-primary focus:text-primary",
            isActive && "text-primary",
          )
        }
        {...props}
      >
        <div className="text-sm leading-none">{title}</div>
        <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
          {children}
        </p>
      </NavLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
