import React from "react";

const Landing = () => {
  return (
    <>
      {/* Desktop view */}
      <div className="laptop flex flex-col md:flex-row justify-between items-center w-full p-8 md:p-16 flex-wrap">
        <span className="flex flex-col w-full md:w-[40%] gap-6">
          <h1 className="text-[40px] sm:text-[60px] md:text-[80px] font-[550]">
            Technoclass
          </h1>
          <h3 className="text-[24px] sm:text-[32px] md:text-[40px] font-[550]">
            Experience the future of teaching
          </h3>
          <p className="text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
            beatae quia? Totam similique amet magnam mollitia nostrum modi
            voluptatibus aut harum quam laudantium ipsum, veniam cumque,
            blanditiis, itaque at debitis?
          </p>
          <span className="bg-black rounded-xl text-white w-full sm:w-[12rem] text-center cursor-pointer py-2 mt-4">
            Get Quotation
          </span>
        </span>
        <div className="relative flex flex-col items-center w-[60%]">
          <img
            src="ipad.svg"
            alt="iPad"
            className="w-[45rem] sm:w-[55rem] md:w-[65rem] mt-8 md:mt-0"
          />
          <div className="absolute top-[-7%] left-[13%] bg-white shadow-2xl text-black rounded-[30px] w-[409px] h-[127px] flex flex-col justify-center p-5 gap-2">
            <h6 className="text-[24px]">Some feature</h6>
            <p>
              Feature description. Feature description. Feature description.
              Feature description.
            </p>
          </div>
          <div className="absolute top-[90%] left-[-11%] bg-white shadow-2xl text-black rounded-[30px] w-[409px] h-[127px] flex flex-col justify-center p-5 gap-2">
            <h6 className="text-[24px]">Some feature</h6>
            <p>
              Feature description. Feature description. Feature description.
              Feature description.
            </p>
          </div>
          <div className="absolute top-[97%] left-[50%] bg-white shadow-2xl text-black rounded-[30px] w-[409px] h-[127px] flex flex-col justify-center p-5 gap-2">
            <h6 className="text-[24px]">Some feature</h6>
            <p>
              Feature description. Feature description. Feature description.
              Feature description.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile and tablet view */}
      <div className="phone hidden">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-0 mt-12 md:mt-0">
          <span className="flex flex-col gap-4 md:text-left text-center md:w-[35rem]">
            <h1 className="text-[30px] sm:text-[35px] font-[550]">
              Technoclass
            </h1>
            <h3 className="text-[15px] sm:text-[18px] font-[550]">
              Experience the future of teaching
            </h3>
          </span>
          <div className="relative flex flex-col items-center">
            <img
              src="ipad.svg"
              alt="iPad illustration"
              className="w-[20rem] sm:w-[22rem] mt-4 md:mt-0"
            />
            <div className="absolute top-[5%] left-[50%] bg-white shadow-2xl text-black rounded-[30px] w-[145px] h-[50px] flex flex-col justify-center p-2">
            <h6 className="text-[12px]">Some feature</h6>
            <p className="text-[7px]">
              Feature description. Feature description. Feature description.
              Feature description.
            </p>
          </div>
          <div className="absolute top-[80%] left-[-9%] bg-white shadow-2xl text-black rounded-[30px] w-[145px] h-[50px] flex flex-col justify-center p-2">
            <h6 className="text-[12px]">Some feature</h6>
            <p className="text-[7px]">
              Feature description. Feature description. Feature description.
              Feature description.
            </p>
          </div>
          </div>
          <p className="text-[10px] sm:text-[12px] md:text-[14px] mt-6 md:w-[50%] text-center md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
            beatae quia? Totam similique amet magnam mollitia nostrum modi
            voluptatibus aut harum quam laudantium ipsum, veniam cumque,
            blanditiis, itaque at debitis?
          </p>

          <span className="bg-black rounded-xl text-white w-full text-center cursor-pointer py-2 mt-4 md:w-auto md:mt-0">
            Get Quotation
          </span>
        </div>
      </div>
    </>
  );
};

export default Landing;
