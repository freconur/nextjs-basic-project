import Link from "next/link";
import { IMAGE_SLIDER_SM, IMAGE_SLIDER_XS } from "./ArrayImageSlider";
import Carrousel from "./Carrousel";
import Image from "next/image";
import { imageBlur } from "ImagesLink/blurImage";
import { useEffect, useState } from "react";

const Slide = () => {
  const [size, setSize] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {size < 540 ?
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
        :
        <main className="hidden xs:block">
          <Carrousel autoSlide={true}>
            {IMAGE_SLIDER_SM.map((url, index) => (
              <Image
                key={index}
                src={url.urlImage}
                width={1900}
                height={650}
                alt={url.name}
                priority
              // placeholder="blur"
              />
            ))}
          </Carrousel>
        </main>
      }
    </>
  );
};

export default Slide;
