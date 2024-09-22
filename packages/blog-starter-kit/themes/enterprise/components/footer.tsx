import Link from "next/link";
import { Container } from "./container";
import { useAppContext } from "./contexts/appContext";
import { SocialLinks } from "./social-links";

export const Footer = () => {
  const { publication } = useAppContext();
  return (
    <footer className="py-5 dark:border-neutral-800 ">
      <Container className="px-5">
        <div className="my-6 flex w-full flex-row justify-center">
          <Link
            href={"/"}
            aria-label={`${publication.title} home page`}
            className="flex flex-row items-center gap-5"
          >
            <p className="text-4xl">Nestornotes</p>
          </Link>
        </div>

        <div className="w-full flex flex-row justify-between items-center">
          {/* <div className="col-span-1 grid grid-cols-4 gap-5 md:col-span-4 lg:col-span-3">
            <div className="col-span-full md:col-span-2 lg:col-span-1">
              <p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">
                Stay in touch
              </p>
              <ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
                <li>
                  <a href="#" className="hover:underline">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Book a demo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Slack
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-full md:col-span-2 lg:col-span-1">
              <p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">
                Resources
              </p>
              <ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
                <li>
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Use Cases
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Source Code
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-full md:col-span-2 lg:col-span-1">
              <p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">
                Product
              </p>
              <ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
                <li>
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">
                Other links
              </p>
              <ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
                <li>
                  <a href="#" className="hover:underline">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <p className="w-1/3">&copy; 2024 Nestor Code Craftors UG</p>
          <div className="flex flex-row justify-center w-1/3">
            <SocialLinks />
          </div>

          <div className="flex flex-row justify-end gap-3 w-1/3">
            <Link href="/imprint" className="hover:underline">
              Imprint
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
