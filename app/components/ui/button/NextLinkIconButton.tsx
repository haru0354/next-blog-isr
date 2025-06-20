import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

type NextLinkIconButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const NextLinkIconButton: React.FC<NextLinkIconButtonProps> = ({
  children,
  href,
  className,
}) => {
  return (
    <div className="flex justify-end">
      <Link
        href={href}
        className={`px-4 text-sm rounded border border-dashed border-gray-400  hover:bg-gray-200
      ${className}`}
      >
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="mr-2 w-[13px] h-[13px]"
        />
        {children}
      </Link>
    </div>
  );
};

export default NextLinkIconButton;
