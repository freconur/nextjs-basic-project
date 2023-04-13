import Link from "next/link";
import { IMAGE_SLIDER_SM, IMAGE_SLIDER_XS } from "./ArrayImageSlider";
import Carrousel from "./Carrousel";
import Image from "next/image";

const Slide = () => {
  return (
    <>
      <div className="xs:hidden">
        <Carrousel autoSlide={true}>
          {IMAGE_SLIDER_XS.map((url, index) => (
            <Image
              key={index}
              src={url.urlImage}
              width={640}
              height={640}
              alt={url.name}
            />
          ))}
        </Carrousel>
      </div>
      <div className="hidden xs:block">
        <Carrousel autoSlide={true}>
          {IMAGE_SLIDER_SM.map((url, index) => (
            <Image
              key={index}
              src={url.urlImage}
              width={1920}
              height={640}
              alt={url.name}
            />
          ))}
        </Carrousel>
      </div>
    </>
  );
};

export default Slide;
