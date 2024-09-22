type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <div className={"container max-w-5xl mx-auto " + className}>{children}</div>
  );
};
