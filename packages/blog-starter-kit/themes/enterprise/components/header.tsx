import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { PublicationNavbarItem } from "../generated/graphql";
import { Button } from "./button";
import { Container } from "./container";
import { useAppContext } from "./contexts/appContext";
import HamburgerSVG from "./icons/svgs/HamburgerSVG";
import { PublicationLogo } from "./publication-logo";
import PublicationSidebar from "./sidebar";
import Link from "next/link";

function hasUrl(
  navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
  return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "/";
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>();
  const { publication } = useAppContext();
  const navbarItems = publication.preferences.navbarItems.filter(hasUrl);

  const toggleSidebar = () => {
    setIsSidebarVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <header className="py-1 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900">
      <Container className="flex flex-row items-center gap-1 md:gap-5 px-5">
        <div className="lg:hidden">
          <Button
            type="outline"
            label=""
            icon={<HamburgerSVG className="h-7 w-7 stroke-current" />}
            className="rounded-xl border-transparent !px-2 !py-2 text-primary hover:bg-slate-100 dark:hover:bg-neutral-800"
            onClick={toggleSidebar}
          />

          {isSidebarVisible && (
            <PublicationSidebar
              navbarItems={navbarItems}
              toggleSidebar={toggleSidebar}
            />
          )}
        </div>
        <div className="flex flex-row md:gap-10 items-end w-full">
          <Link className="text-3xl w-40 md:w-36" href="/blog">
            Nn. <span className="text-2xl">blog</span>
          </Link>
          <div className="flex flex-row items-end justify-between w-full">
            <Link className="mb-0.5 opacity-0 md:opacity-100" href="/">
              Home
            </Link>
            <Link className="mb-0.5" href={baseUrl}>
              Back to Nestornotes
            </Link>
          </div>
        </div>
        {/* <div className="col-span-2 flex flex-row items-center justify-end gap-5 text-slate-300 lg:col-span-3">
          <nav className="hidden lg:block">{navList}</nav>
        </div> */}
      </Container>
      <div className="mt-5 flex justify-center lg:hidden">
        <div className="hidden lg:block text-3xl">
          Nn. <span className="text-2xl">blog</span>
        </div>
      </div>
    </header>
  );
};
