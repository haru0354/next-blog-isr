import Link from "next/link";

type NextLinkButtonProps = {
  children: React.ReactNode;
  color: "blue" | "gray" | "red" | "white";
  size: "normal" | "small";
  href: string;
  className?: string;
};

const NextLinkButton: React.FC<NextLinkButtonProps> = ({
  children,
  color,
  size,
  href,
  className,
}) => {
  const colors = {
    blue: "border-sky-900 bg-sky-700",
    gray: "border-gray-900 bg-gray-700",
    red: "border-red-900 bg-red-700",
    white: "border-gray-900 bg-gray-500",
  };

  const sizes = {
    normal: "min-w-[170px] px-10 py-2 m-4",
    small: "min-w-[100px] px-6 py-1 mx-2",
  };

  return (
    <Link
      href={href}
      className={`text-center shadow font-bold border text-white hover:text-black hover:bg-white 
      ${className} 
      ${colors[color]} 
      ${sizes[size]}`}
    >
      {children}
    </Link>
  );
};

export default NextLinkButton;
