import Image from "next/image";

const HeaderImage = () => {
  return (
    <section className="bg-sky-100 w-full">
      <Image
        src="/header-image.png"
        alt="alt"
        width={1150}
        height={600}
        className="mx-auto"
        priority
      />
    </section>
  );
};

export default HeaderImage;
