import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import NextLinkButton from "../ui/NextLinkButton";

type HeroProps = {
  title: string;
  subTitle: string;
  contents: string[];
  href: string;
};

const Hero: React.FC<HeroProps> = ({ title, subTitle, contents, href }) => {
  return (
    <section className="relative bg-sky-200 md:h-[600px] h-[300px] w-full flex items-center">
      <Image
        src="/hero_image.JPG"
        alt="hero背景画像"
        priority
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex-col justify-center items-center md:w-[440px] w-[340px] md:h-[260px] h-[240px]  py-4 px-2 bg-white md:opacity-90 opacity-80 rounded text-center">
          <p className="font-semibold mb-3 text-lg md:text-2xl">{title}</p>
          <p className="font-bold mb-4 text-lg md:text-2xl text-sky-500">
            「{subTitle}」
          </p>
          {contents.map((content, index) => (
            <p className="mb-2" key={index}>
              {content}
            </p>
          ))}
          <div className="flex justify-center items-center">
            <NextLinkButton
              href={href}
              color="blue"
              size="normal"
              className="mb-1 rounded"
            >
              詳細はコチラ
            </NextLinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
