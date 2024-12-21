import Image from "next/image";
import Link from "next/link";

type SideImageProps = {
  src: string;
  alt: string;
  href: string;
  textTitle?: string;
};

const SideImage: React.FC<SideImageProps> = ({
  src,
  alt,
  href,
  textTitle,
}) => {
  return (
    <>
      <div className="hover:bg-gray-200 mb-4">
        <Link href={href}>
          <Image
            src={src}
            alt={alt}
            width={240}
            height={174}
            style={{
              width: "240px",
              height: "auto",
            }}
            className="block mx-auto"
          />
          {textTitle && <p className="my-2 text-center">{textTitle}</p>}
        </Link>
      </div>
    </>
  );
};

export default SideImage;
