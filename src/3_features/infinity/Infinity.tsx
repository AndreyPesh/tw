const slides = Array(5).fill('');

const InfinityCarousel = () => {
  return (
    <div id="slider" className="relative w-[400px] h-[300px]">
      <div
        id="wrapper"
        className="relative overflow-hidden w-[400px] h-[300px] z-[1]"
      >
        <div
          id="slides"
          className="relative flex top-0 left-[-400px] w-[10000px]"
        >
          {slides.map((_, index) => (
            <span
              className={`relative w-[400px] h-[300px] flex flex-col justify-center transition-all bg-slate-${
                (index + 5) * 100
              }`}
              key={index}
            >
              Slide {index + 1}
            </span>
          ))}
        </div>
      </div>
      <a className="absolute top-[50%] left-2 w-[50px] h-[50px] bg-white rounded-full border-2 z-[2] cursor-pointer active:scale-90"></a>
      <a className="absolute top-[50%] right-2 w-[50px] h-[50px] bg-white rounded-full border-2 z-[2] cursor-pointer active:scale-90"></a>
    </div>
  );
};

export default InfinityCarousel;
