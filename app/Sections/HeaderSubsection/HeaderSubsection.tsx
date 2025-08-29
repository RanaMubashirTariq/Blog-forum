'use client'
import React from "react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Menu as MenuIcon, X as XIcon } from "lucide-react"; // Add icons for toggle
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Home", id: "#home" },
  { label: "News", id: "#news" },
  { label: "Podcasts", id: "#podcasts" },
  { label: "Resources", id: "#resources" },
];

export default function HeaderSubsection() {
  const [mounted, setMounted] = React.useState(false);
  const [activeId, setActiveId] = React.useState<string>("");
  const [menuOpen, setMenuOpen] = React.useState(false); // NEW: toggle state
  const headerRef = React.useRef<HTMLElement>(null);
  const [spacerHeight, setSpacerHeight] = React.useState<number>(0);
  const sectionElementsRef = React.useRef<HTMLElement[]>([]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    const currentHash = typeof window !== "undefined" ? window.location.hash : "";
    setActiveId(currentHash || "");
  }, [mounted]);

  React.useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    const collectSections = () => {
      const ids = navigationItems
        .map((n) => n.id)
        .filter((id) => id && id.startsWith("#"));
      const els = ids
        .map((id) => document.querySelector<HTMLElement>(id))
        .filter((el): el is HTMLElement => Boolean(el))
        .sort((a, b) => a.offsetTop - b.offsetTop);
      sectionElementsRef.current = els;
    };

    collectSections();

    const updateActiveFromScroll = () => {
      const headerOffset = headerRef.current?.offsetHeight ?? 0;
      const scrollPos = (window.scrollY || window.pageYOffset) + headerOffset + 1;
      const sections = sectionElementsRef.current;
      if (sections.length === 0) return;

      if (scrollPos < sections[0].offsetTop) {
        setActiveId("#home");
        return;
      }

      let current = sections[0];
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          current = section;
          break;
        }
        if (scrollPos >= top) {
          current = section;
        }
      }
      setActiveId(`#${current.id}`);
    };

    const onResize = () => {
      collectSections();
      updateActiveFromScroll();
    };

    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", onResize);
    updateActiveFromScroll();

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [mounted]);

  React.useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    const measure = () => {
      if (headerRef.current) {
        setSpacerHeight(headerRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [mounted]);

  return (
    <>
      <header
        ref={headerRef}
        className="flex flex-col w-full items-center bg-black border-b border-[#262626] fixed top-0 left-0  z-50 "
      > 
        <div className=" flex items-center justify-center gap-2.5 px-6 py-5 max-[1500px]:py-4 max-[500px]:px-[3] w-full bg-black border-b border-[#262626]">
          <div className="text-[#98989a] text-lg max-[1500px]:text-base max-[1000px]:text-sm max-[767px]:text-[12px] max-[767px]:leading-[24px] max-[500px]:text-[10px] leading-[27px]">
            Subscribe to our Newsletter For New &amp; latest Blogs and Resources
          </div>
          <img
            className="w-6 h-6 max-[1100px]:w-5 max-[1100px]:h-5 max-[500px]:w-3 max-[500px]:h-3"
            alt="Icon"
            src="/icon-arrow.png"
          />
        </div>

        <div className="flex items-center justify-between px-[162px] max-[1700px]:px-[50px] max-[767px]:px-[25px] max-[767px]:py-4 py-6 w-full bg-[#a29bfe2b]">
          <img
            className="w-[178.91px] h-[50px] max-[1500px]:h-[40px] max-[1500px]:w-[150px] max-[767px]:w-[120px] max-[767px]:h-[30px]"
            alt="Logo"
            src="/logo.png"
          />

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden min-[1020px]:block">
            <NavigationMenuList className="inline-flex items-center gap-10 rounded-xl">
              {navigationItems.map((item, index) => {
                const isActive = mounted && activeId === item.id;
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      asChild
                      className={`relative font-['Inter'] text-lg max-[1500px]:text-base leading-[27px]
                      ${
                        isActive
                          ? "font-medium text-white bg-[#a29bfe2b] px-6 py-3.5 rounded-[10px] border border-[#333333]"
                          : "text-[#7e7e81] hover:text-white"
                      }`}
                    >
                      <Link
                        href={item.id}
                        scroll={true}
                        onClick={() => setActiveId(item.id)}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Toggle Button */}
          <button
            className="block min-[1020px]:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XIcon className="w-6 h-6 text-white" /> : <MenuIcon className="w-6 h-6 text-white" />}
          </button>

          <Button className="hidden h-auto min-[1020px]:inline-flex cursor-pointer transform transition-transform duration-300 hover:scale-90 px-5 py-[14px] bg-[#a29bfe] hover:bg-[#a29bfe]/90 rounded-[10px]">
            <div className="text-[#141414] text-lg max-[1500px]:text-base">
              Contact Us
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="block  min-[1020px]:hidden w-full bg-black border-t border-[#262626]">
            <ul className="flex flex-col gap-4 p-4">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.id}
                    className={`block text-lg text-[#7e7e81] hover:text-white ${
                      activeId === item.id ? "text-white font-medium" : ""
                    }`}
                    onClick={() => {
                      setActiveId(item.id);
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
      <div className="hidden min-[1020px]:block" style={{ height: spacerHeight }} />
    </>
  );
}
