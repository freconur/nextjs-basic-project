import Link from "next/link";
import { slides } from "./ArrayImageSlider";
import Slider from "react-slick";
import Carrousel from "./Carrousel";
import { RiWhatsappLine } from "react-icons/ri";

const Slide = () => {
  return (
    <div>
      <Carrousel autoSlide={true}>
        {slides.map((url) => (
          <img src={url} alt="image" />
        ))}
      </Carrousel>
    </div>
  );
};

export default Slide;
