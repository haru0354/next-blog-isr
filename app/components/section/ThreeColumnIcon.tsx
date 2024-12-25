import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAsia,
  faPlaneDeparture,
  faCartFlatbedSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedItem from "../animation/AnimatedItem";
import Section from "../section/Section";

type ThreeColumnIconProps = {
  title: string;
  name1: string;
  name2: string;
  name3: string;
  content1: string;
  content2: string;
  content3: string;
  bgColor?: string;
};

const ThreeColumnIcon: React.FC<ThreeColumnIconProps> = ({
  title,
  name1,
  name2,
  name3,
  content1,
  content2,
  content3,
  bgColor = "bg-white",
}) => {
  return (
    <Section name={title} bgColor={bgColor}>
      <div className="flex w-full max-w-[1118px] mx-auto my-10 flex-wrap items-center justify-center">
        <AnimatedItem
          animation="fadeInVariants"
          elementType="div"
          className="border-2 border-sky-600 rounded w-[28%] mx-2 my-4 px-4 md:px-8 py-6 flex flex-col min-w-[330px] min-h-[330px]"
        >
          <span className="flex justify-center w-[32px] mx-auto mb-6 text-blue-500">
            <FontAwesomeIcon icon={faEarthAsia} style={{ fontSize: "2em" }} />
          </span>
          <h3 className="text-gray-700 mb-6 text-center text-xl font-semibold">
            {name1}
          </h3>
          <p className="text-gray-700 mb-6">{content1}</p>
        </AnimatedItem>
        <AnimatedItem
          animation="fadeInVariants"
          elementType="div"
          delay={0.3}
          className="border-2 border-sky-600 rounded w-[28%] mx-2 my-4 px-4 md:px-8 py-6 flex flex-col min-w-[330px] min-h-[330px]"
        >
          <span className="flex justify-center w-[32px] mx-auto mb-6 text-blue-500">
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              style={{ fontSize: "2em" }}
            />
          </span>
          <h3 className="text-gray-700 mb-6 text-center text-xl font-semibold">
            {name2}
          </h3>
          <p className="text-gray-700 mb-6">{content2}</p>
        </AnimatedItem>
        <AnimatedItem
          animation="fadeInVariants"
          elementType="div"
          delay={0.6}
          className="border-2 border-sky-600 rounded w-[28%] mx-2 my-4 px-4 md:px-8 py-6 flex flex-col min-w-[330px] min-h-[330px]"
        >
          <span className="flex justify-center w-[32px] mx-auto mb-6 text-blue-500">
            <FontAwesomeIcon
              icon={faCartFlatbedSuitcase}
              style={{ fontSize: "2em" }}
            />
          </span>
          <h3 className="text-gray-700 mb-6 text-center text-xl font-semibold">
            {name3}
          </h3>
          <p className="text-gray-700 mb-6">{content3}</p>
        </AnimatedItem>
      </div>
    </Section>
  );
};

export default ThreeColumnIcon;
