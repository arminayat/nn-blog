import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const PostTitle = ({ children }: Props) => {
  return (
    <div className="prose md:prose-xl mx-auto dark:prose-invert max-w-screen-md px-5 md:px-0">
      <h1 className="font-medium">{children}</h1>
    </div>
  );
};
