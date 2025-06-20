import Image from "next/image";
import Link from "next/link";

import { siteTitle } from "@/app/config/blogConfig";

type HeaderProps = {
  isTopPage?: boolean;
};

const Header: React.FC<HeaderProps> = ({ isTopPage }) => {
  return (
    <header>
      <div className="flex items-center justify-center bg-blog-bgColor">
        <Link href="/">
          {isTopPage ? (
            <h1>
              <Image
                src="/logo_blog.png"
                alt={siteTitle || "サイトタイトルが未設定"}
                width={350}
                height={90}
                priority
                className="w-[220px] h-auto md:w-[350px]"
              />
            </h1>
          ) : (
            <Image
              src="/logo_blog.png"
              alt={siteTitle || "サイトタイトルが未設定"}
              width={350}
              height={90}
              priority
              className="w-[220px] h-auto md:w-[350px]"
            />
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
