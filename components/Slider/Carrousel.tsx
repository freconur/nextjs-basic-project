import { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

interface PropsCarrousel {
  children: JSX.Element[],
  autoSlide: boolean
}
const Carrousel = ({ children: slides, autoSlide=false }: PropsCarrousel) => {
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
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentValue * 100}%)` }}
        >
          {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="rounded-full rotate-90 bg-gray-100 hover:bg-white"
          >
            <RiArrowDownSLine className="text-3xl" />
          </button>
          <button
            onClick={next}
            className="rounded-full -rotate-90 bg-gray-100 hover:bg-white"
          >
            <RiArrowDownSLine className="text-3xl" />
          </button>
        </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${currentValue === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
      </div>

    {/* </div> */}

    </>
  );
};

export default Carrousel;
