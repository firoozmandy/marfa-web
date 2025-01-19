import * as React from "react"
import { Link, NavLink } from "react-router-dom"
import SiteLogo from "./site-logo"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface MobileNavProps {
  mainNavItems?: MainNavItem[]
  triggerIcon?: string
}

export function MobileNav({ mainNavItems, triggerIcon = "default" }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {triggerIcon === "default" && (
        <SheetTrigger asChild>
          <button className="flex justify-center items-center lg:hidden hover:bg-primary dark:hover:bg-primary focus:bg-primary dark:bg-white/[.15] lg:ml-5 border hover:border-transparent focus:border-transparent dark:border-transparent rounded-full w-8 h-8 transition-colors group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="group-hover:fill-white group-focus:fill-white w-4 h-4 transition-colors dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"></path>
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </SheetTrigger>
      )}

      {triggerIcon === "style-2" && (
        <SheetTrigger asChild>
          <button className="flex justify-center items-center lg:hidden ml-2 lg:ml-5 rounded-full w-8 h-8 transition-colors group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="group-hover:fill-primary group-focus:fill-primary w-6 h-6 transition-colors dark:fill-white fill-foreground"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </SheetTrigger>
      )}
      <SheetContent side="left" className="pr-0 pl-1 w-full sm:max-w-full">
        <div className="px-7">
          <Link to="/" className="block mr-12 shrink-0" onClick={() => setIsOpen(false)}>
            <SiteLogo width={50} height={30} lightClasses="dark:hidden" darkClasses="hidden dark:block" />
          </Link>
        </div>
        <ScrollArea className="my-4 pb-10 pl-6 h-[calc(100vh-8rem)]">
          <div className="pr-7 pl-1">
            <Accordion
              type="multiple"
              defaultValue={mainNavItems && mainNavItems.map(item => item.title)}
              className="w-full"
            >
              {mainNavItems?.map((item, index) => (
                <React.Fragment key={index}>
                  {item?.items ? (
                    <AccordionItem value={item.title}>
                      <AccordionTrigger className="text-sm">{item.title}</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2">
                          {item.items?.map((subItem, index) =>
                            subItem.href ? (
                              <MobileLink
                                key={index}
                                href={String(subItem.href)}
                                setIsOpen={setIsOpen}
                                disabled={subItem.disabled}
                              >
                                {subItem.title}
                              </MobileLink>
                            ) : (
                              <div key={index} className="text-muted-foreground transition-colors">
                                {item.title}
                              </div>
                            )
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    item.href && (
                      <div>
                        <Link
                          to={item.href}
                          className="block py-4 border-b text-sm hover:text-primary focus:text-primary transition-colors"
                        >
                          {item.title}
                        </Link>
                      </div>
                    )
                  )}
                </React.Fragment>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string
  disabled?: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileLink({ children, href, disabled, setIsOpen }: MobileLinkProps) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => cn(
        "transition-colors hover:text-primary",
        isActive && "text-foreground",
        disabled && "pointer-events-none opacity-60",
       )
      } 
      onClick={() => setIsOpen(false)}
    >
      {children}
    </NavLink>
  )
}
