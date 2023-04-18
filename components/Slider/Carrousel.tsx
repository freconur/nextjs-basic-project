import Link from "next/link";
import { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

interface PropsCarrousel {
  children: JSX.Element[],
  autoSlide: boolean
}
const Carrousel = ({ children: slides, autoSlide = false }: PropsCarrousel) => {
  const [currentValue, setCurrentValue] = useState<any>(0);
  //   console.log("slides", JSON.stringify(slides))
  const prev = () =>
    setCurrentValue((curr: any) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurrentValue((curr: any) => (curr === slides.length - 1 ? 0 : curr + 1));
  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, 3000)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <>
      <div className="relative">
        <div className="overflow-hidden relative">
          <Link
            href={`/${slides[currentValue].props.alt}`}
            className="relative z-10 left-0 right-0 top-0 flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${currentValue * 100}%)` }}
          >
            {slides}
          </Link>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <div
              onClick={prev}
              className="relative z-20 rounded-full rotate-90 bg-gray-100 hover:bg-white"
            >
              <RiArrowDownSLine className="text-3xl" />
            </div>
            <div
              onClick={next}
              className="relative z-20  rounded-full -rotate-90 bg-gray-100 hover:bg-white"
            >
              <RiArrowDownSLine className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="absolute z-20 -bottom-6 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`
              transition-all w-2 h-2 bg-gray-500 rounded-full
              ${currentValue === i ? "p-1.5" : "bg-opacity-50"}
            `}
              />
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Carrousel;
