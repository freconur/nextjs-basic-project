import Link from "next/link";
import { IMAGE_SLIDER_SM, IMAGE_SLIDER_XS } from "./ArrayImageSlider";
import Carrousel from "./Carrousel";
import Image from "next/image";
import { imageBlur } from "ImagesLink/blurImage";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic'
const Slide = () => {
  const [size, setSize] = useState<number>(0);
  const DynamicImage = dynamic(() => import('next/image'), {
    loading: () => <p>Loading...</p>,
  })
  useEffect(() => {
    // const handleResize = () => {
    //   setSize(window.innerWidth);
    // }
    setSize(window.innerWidth);

    // window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {size < 540 ?
        <main className="xs:hidden relative">
          <Carrousel autoSlide={true}>
            {IMAGE_SLIDER_XS.map((url, index) => (
              index < 1
                ?
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
                :
                <DynamicImage
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
              index < 1 
              ?
              <Image
                key={index}
                src={url.urlImage}
                width={1900}
                height={650}
                alt={url.name}
                priority
              // placeholder="blur"
              />
              :
              <DynamicImage
                  key={index}
                  src={url.urlImage}
                  width='1900'
                  height='650'
                  alt={url.name}
                  priority
                  // blurDataURL={imageBlur}
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
