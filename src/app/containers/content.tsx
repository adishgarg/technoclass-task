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
        <span className="relative block md:hidden">
          <img
            src="quote.svg"
            alt="quote"
            className=" absolute bottom-[40%] left-[-100%] -translate-y-6 -z-10 opacity-50"
          />
          <span className="block md:hidden">
            Product description will be here in one small paragrapgh. Product
            description will be here in one small paragrapgh.{" "}
            <span className="text-[#FF8A00]"> Product description</span>Product
            description Product description will be here in one small
            paragrapgh. Product description
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
      <div className="flex flex-wrap justify-center gap-9 mt-28">
      <div className="relative w-full sm:w-[150px] md:w-[300px] lg:w-[418px] rounded-[2.2rem] overflow-hidden flex justify-center items-center">
  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg z-10"></div>
  <img
    src="girl.png"
    alt="Girl"
    className="rounded-lg object-cover w-full h-full relative z-0"
  />
  <p className="absolute text-[12px] sm:text-[16px] md:text-[20px] lg:text-[30px] z-10 text-white ml-3 bottom-4">
    Some product image will be here
  </p>
</div>

        <div className="hidden md:block relative w-full sm:w-[200px] md:w-[300px] lg:w-[418px] rounded-[2.2rem] overflow-hidden flex justify-center items-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg z-10"></div>
          <img
            src="guy.png"
            alt="Girl"
            className="rounded-lg object-cover w-full h-full relative z-0"
          />
          <p className="absolute text-[14px] sm:text-[18px] md:text-[20px] lg:text-[30px] z-10 text-white ml-3 bottom-4">
            Some product image will be here
          </p>
        </div>
        <div className=" hidden md:block relative w-full sm:w-[200px] md:w-[300px] lg:w-[418px] rounded-[2.2rem] overflow-hidden flex justify-center items-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg z-10"></div>
          <img
            src="earphone.png"
            alt="Girl"
            className="rounded-lg object-cover w-full h-full relative z-0"
          />
          <p className="absolute text-[14px] sm:text-[18px] md:text-[20px] lg:text-[30px] z-10 text-white ml-3 bottom-4">
            Some product image will be here
          </p>
        </div>
      </div>
      <div className="absolute md:hidden block bg-[#0C0C0C] h-[700px] z-[-20] w-[100vw] bottom-[-170%]"></div>
      <div className="absolute hidden md:block bg-[#0C0C0C] h-[1033px] z-[-20] w-[100vw] sm:bottom-[310%] sm:mt-96 lg:top-[220%]"></div>
      
      <div className="flex flex-col items-center justify-center gap-26 sm:gap-28 mt-8 sm:mt-28 px-4 sm:px-8">
  <div className="w-full sm:w-[90vw] flex flex-col sm:flex-row justify-evenly items-center gap-6 sm:gap-12 mt-10">
    <h1 className="text-[24px] sm:text-[32px] md:text-[34px] font-semibold text-white text-center sm:text-left">
      Video Title Will be here
    </h1>
    <p className="text-white w-full sm:w-[45vw] text-center sm:text-left">
      Product description will be here in one small <span className="text-[#FF5C00]">paragraph</span>.
      Product description will be here in one small paragraph. Product description.
    </p>
  </div>
  <div className="w-full sm:w-[100%] md:w-[90%] mt-6">
    <img src="man.png" alt="Product image" className="w-full h-auto object-cover rounded-md " />
  </div>
</div>

    </div>
  );
};

export default Content;
