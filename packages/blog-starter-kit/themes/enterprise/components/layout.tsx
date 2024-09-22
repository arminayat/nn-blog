import { fontRobotoSlab } from "../styles/fonts";
import { Analytics } from "./analytics";
import { Integrations } from "./integrations";
import { Meta } from "./meta";
import { Scripts } from "./scripts";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Scripts />
      <div className="fixed -z-10 top-0 left-0 w-full h-[100vh] nnbg" />
      <div className="fixed -z-10 top-0 left-0 w-full h-[100vh] dark:bg-dot-white/[0.2] bg-dot-black/[0.2]" />
      <div
        className={`min-h-screen dark:bg-neutral-950 font-roboto-slab antialiased ${fontRobotoSlab.variable}`}
      >
        <main>{children}</main>
      </div>
      <Analytics />
      <Integrations />
    </>
  );
};
