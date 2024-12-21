import Image from "next/image";
import Link from "next/link";

const SideTopImage = () => {
  return (
    <>
      <div className="hover:bg-gray-200 mb-4">
        <Link href="/">
          <Image
            src="/no_image.jpg"
            alt="海外旅行のしおりアプリ"
            width={240}
            height={174}
            style={{
              width: "240px",
              height: "auto",
            }}
            className="block mx-auto"
          />
          <p className="my-2 text-center">サイドトップ画像リンク
          </p>
        </Link>
      </div>
    </>
  );
};

export default SideTopImage;
