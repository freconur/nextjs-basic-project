import Link from "next/link";
import { IMAGE_SLIDER_SM, IMAGE_SLIDER_XS } from "./ArrayImageSlider";
import Carrousel from "./Carrousel";
import Image from "next/image";
import { imageBlur } from "ImagesLink/blurImage";

const Slide = () => {
  return (
    <>
      <div className="xs:hidden relative">
        <Carrousel autoSlide={true}>
          {IMAGE_SLIDER_XS.map((url, index) => (
            <Image
              key={index}
              src={url.urlImage}
              width={1080}
              height={1080}
              alt={url.name}
              priority
              blurDataURL={imageBlur}
              placeholder="blur"
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
              width={1900}
              height={650}
              alt={url.name}
            />
          ))}
        </Carrousel>
      </div>
    </>
  );
};

export default Slide;
