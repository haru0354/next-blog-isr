import Link from "next/link";
import Image from "next/image";
import Section from "../section/Section";
import AnimatedItem from "../animation/AnimatedItem";
import Button from "../ui/Button";

type RecommendArticleProps = {
  src: string;
  alt: string;
  url: string;
  name: string;
  contents: string[];
  imageRight?: boolean;
  bgColor?: string;
};

const RecommendArticle: React.FC<RecommendArticleProps> = ({
  src,
  alt,
  url,
  name,
  contents,
  imageRight = true,
  bgColor = "bg-gray-200",
}) => {
  return (
    <Section name="おすすめの記事" bgColor={bgColor}>
      <AnimatedItem
        elementType="div"
        animation="fadeInVariants"
        className={`flex flex-wrap justify-center w-full my-20 py-16 border rounded border-sky-600 bg-white ${
          imageRight ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="w-full py-4 mx-14 max-w-[400px] justify-center items-center">
          <h3 className="text-gray-700 mb-6 text-2xl font-semibold ">{name}</h3>
          {contents.map((content, index) => (
            <p className="text-gray-700 mb-6" key={index}>
              {content}
            </p>
          ))}
          <Link href={url}>
            <Button color="blue" size="normal">
              記事はコチラ
            </Button>
          </Link>
        </div>
        <div className="w-full flex justify-center items-center py-4  max-w-[400px] ">
          <Image src={src} alt={alt} width={350} height={250} />
        </div>
      </AnimatedItem>
    </Section>
  );
};

export default RecommendArticle;
