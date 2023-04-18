import Link from "next/link";
import { IMAGE_SLIDER_SM, IMAGE_SLIDER_XS } from "./ArrayImageSlider";
import Carrousel from "./Carrousel";
import Image from "next/image";
import { imageBlur } from "ImagesLink/blurImage";

const Slide = () => {
  return (
    <>
      <main className="xs:hidden relative">
        <Carrousel autoSlide={true}>
          {IMAGE_SLIDER_XS.map((url, index) => (
            <Image
              key={index}
              src={url.urlImage}
              width='500'
              height='500'
              alt={url.name}
              priority
              blurDataURL={imageBlur}
              placeholder="blur"
              />
              ))}
        </Carrousel>
      </main>
      <main className="hidden xs:block">
        <Carrousel autoSlide={true}>
          {IMAGE_SLIDER_SM.map((url, index) => (
            <Image
              key={index}
              src={url.urlImage}
              width={1900}
              height={650}
              alt={url.name}
              // placeholder="blur"
            />
          ))}
        </Carrousel>
      </main>
    </>
  );
};

export default Slide;
