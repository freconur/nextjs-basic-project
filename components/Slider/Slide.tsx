import Link from "next/link";
import { IMAGE_SLIDER_SM, IMAGE_SLIDER_XS } from "./ArrayImageSlider";
import Carrousel from "./Carrousel";
import Image from "next/image";





const Slide = () => {


  return (
    <>
      <div className="sm:hidden">
        <Carrousel autoSlide={true}>
          {IMAGE_SLIDER_XS.map((url) => (
            <Image
              src={url.urlImage}
              width={640}
              height={640}
              alt={url.name}
            />
            // <img src={url.urlImage} alt="image" />
          ))}
        </Carrousel>
      </div>
      <div className="hidden sm:block">
        <Carrousel autoSlide={true}>
          {IMAGE_SLIDER_SM.map((url) => (
            <Image
              src={url.urlImage}
              width={1280}
              height={640}
              alt={url.name}
            />
            // <img  src={url.urlImage} alt={`${url.name}`} />
          ))}
        </Carrousel>
      </div>
    </>
  );
};

export default Slide;
