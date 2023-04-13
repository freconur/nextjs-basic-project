import Link from "next/link";
import { IMAGE_SLIDER_SM, IMAGE_SLIDER_XS } from "./ArrayImageSlider";
import Carrousel from "./Carrousel";





const Slide = () => {


  return (
    <>
    <div className="sm:hidden">
      <Carrousel autoSlide={true}>
        {IMAGE_SLIDER_XS.map((url) => (
          <img src={url.urlImage} alt="image" />
        ))}
      </Carrousel>
    </div>
    <div className="hidden sm:block">
    <Carrousel autoSlide={true}>
        {IMAGE_SLIDER_SM.map((url) => (
          // <Link className="block w-full h-full" href="/">
            <img  src={url.urlImage} alt={`${url.name}`} />
          // </Link>
        ))}
      </Carrousel>
    </div>
    </>
  );
};

export default Slide;
