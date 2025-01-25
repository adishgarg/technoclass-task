import React from "react";

const Content: React.FC = () => {
  const boxContents = [
    { value: "105 lbs", cont: "Net Weight" },
    {
      value: "26 mph",
      cont: "Top Speed",
    },
    {
      value: "38 miles",
      cont: "Max Range",
    },
    {
      value: "89 nm",
      cont: "Max Torque",
    },
    {
      value: "22% slope",
      cont: "Hill Climbing",
    },
    {
      value: "2x",
      cont: "Hydraulic Disc Brakes",
    },
  ];
  return (
    <div className="flex flex-col items-center w-full p-8 md:p-16 mt-32 gap-5">
      <h1 className="text-[37px] sm:text-[55px] md:text-[80px] font-[510]">
        Why Technoclass
      </h1>
      <h4 className="text-[24px] sm:text-[32px] md:text-[40px]">
        Think. Create. Innovate.
      </h4>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center">
        <span className="relative">
        <img
            src="quote.svg"
            alt="quote"
            className="block md:hidden absolute bottom-[40%] left-[-100%] -translate-y-6 -z-10 opacity-50"
          />
        <span className="block md:hidden">
          Product description will be here in one small paragrapgh. Product
          description will be here in one small paragrapgh.{" "}
          <span className="text-[#FF8A00]"> Product description</span>Product
          description Product description will be here in one small paragrapgh.
          Product description
        </span>
        </span>
        <span className="relative">
          <img
            src="quote.svg"
            alt="quote"
            className="hidden md:block absolute bottom-[-30%] left-[-100%] -translate-y-6 -z-10 opacity-50"
          />
          <span className="hidden md:block relative z-10 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
            Product description will be here in one small paragraph. Product
            description will be here in one small paragraph. Product description
            Product description will be here in one small paragraph. Product
            description Product description will be here in one small paragraph.
            Product description will be here in one small paragraph. Product
            description Product description will be here in one small paragraph.
            Product description will be here in one small paragraph.
          </span>
        </span>
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 p-4">
        {boxContents.map((content, index) => (
          <div
            key={index}
            className="w-full sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 bg-white border-2 flex items-center justify-center rounded-lg shadow-md"
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                {content.value}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                {content.cont}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
