'use client'
import React from "react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
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


export default function HeaderSubsection  () {
  const [mounted, setMounted] = React.useState(false);
  const [activeId, setActiveId] = React.useState<string>("");
  const headerRef = React.useRef<HTMLElement>(null);
  const [spacerHeight, setSpacerHeight] = React.useState<number>(0);
  const sectionElementsRef = React.useRef<HTMLElement[]>([]);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize from location hash after mount to avoid SSR mismatch
  React.useEffect(() => {
    if (!mounted) return;
    const currentHash = typeof window !== "undefined" ? window.location.hash : "";
    setActiveId(currentHash || "");
  }, [mounted]);

  // Scrollspy: compute active link on scroll respecting header height and order
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

      // Above first section → Home
      if (scrollPos < sections[0].offsetTop) {
        setActiveId("#home");
        return;
      }

      // Find section whose [top, bottom) contains scrollPos
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
    // Initial sync
    updateActiveFromScroll();

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [mounted]);

  // Measure header height to create a spacer when fixed on >=1020px
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
    <header ref={headerRef} className=" flex flex-col w-full items-center relative bg-black border-b border-[#262626] min-[1020px]:fixed min-[1020px]:top-0 min-[1020px]:left-0 min-[1020px]:right-0 min-[1020px]:z-50">
      <div className="flex items-center justify-center gap-2.5 px-6 py-5 max-[1500px]:py-4 relative self-stretch w-full flex-[0_0_auto] bg-black border-b border-[#262626]">
        <div className="relative  font-['Inter'] font-regular text-[#98989a] text-lg max-[1500px]:text-base tracking-[-3%] leading-[27px] whitespace-nowrap">
          Subscribe to our Newsletter For New &amp; latest Blogs and Resources
        </div>

        <img className="relative w-6 h-6 max-[1100px]:w-5 max-[1100px]:h-5" alt="Icon" src="/icon-arrow.png" />
      </div>

      <div className=" flex items-center justify-between px-[162px] max-[1700px]:px-[50px] py-6 relative self-stretch w-full flex-[0_0_auto] bg-[#a29bfe2b]">
        <img
          className="relative w-[178.91px] h-[50px] max-[1500px]:h-[40px] max-[1500px]:w-[150px]"
          alt="Logo"
          src="/logo.png"
        />

        <NavigationMenu className="w-full">
        <NavigationMenuList className="inline-flex items-center gap-10 rounded-xl">
        {navigationItems.map((item, index) => {
          const isActive = mounted && activeId === item.id;
          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                asChild
                className={`relative font-['Inter'] text-lg max-[1500px]:text-base tracking-[0] leading-[27px] whitespace-nowrap
          ${
            isActive
              ? "relative  font-['Inter'] font-medium text-white text-lg max-[1500px]:text-base tracking-[0] leading-[27px] whitespace-nowrap inline-flex items-center gap-2.5 px-6 py-3.5 relative flex-[0_0_auto] bg-[#a29bfe2b] rounded-[10px] border border-solid border-[#333333]"
              : "text-[#7e7e81] tracking-[0] leading-[27px] whitespace-nowrap relative font-['Inter'] font-regular text-lg max-[1500px]:text-base hover:text-white"
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
 
        <Button className="cursor-pointer transform transition-transform duration-300 hover:scale-90 inline-flex items-center gap-2.5 px-5 py-[14px] relative flex-[0_0_auto] bg-[#a29bfe] hover:bg-[#a29bfe]/90 rounded-[10px] overflow-hidden h-auto">
          <div className="relative   font-['Inter'] font-medium text-[#141414] text-lg max-[1500px]:text-base tracking-[0] leading-[27px] whitespace-nowrap">
            Contact Us
          </div>
        </Button>
      </div>
    </header>
    <div className="hidden min-[1020px]:block" style={{ height: spacerHeight }} />
    </>
  );
};
