import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-50 ">
        <Image
          alt="footerイメージ"
          src="/footer-image.png"
          width={1000}
          height={370}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          className="block mx-auto"
        />
      </div>
      <footer>
        <div className="bg-blue-500 min-h-[68px] w-full flex flex-grow bottom-0 items-end justify-center">
          <ul className="text-xs text-center mb-3">
            <li className="mb-2 text-white">
              <Link href="/privacypolicy">プライバシーポリシー・免責事項</Link>
            </li>
            <li className="text-black">
              &copy;サイトタイトル
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
