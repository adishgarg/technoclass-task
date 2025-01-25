import React from "react";

export const Footer = () => {
    return (
        <>
        <div className="bg-black pb-7 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-6 sm:py-10 flex-wrap">
                <div className="flex flex-col items-center justify-center text-white gap-2 mb-6 sm:mb-0">
                    <img src="union.svg" alt="logo" className="h-[50px] mb-1"/>
                    <p className="text-sm sm:text-base">Hello@RecomCompany.co</p>
                    <p className="text-sm sm:text-base">+91-157-256-4862</p>
                    <span className="flex flex-row gap-4 items-center justify-center">
                        <p className="text-[11px] sm:text-[13px]">Get Social</p>
                        <img src="twitter.svg" alt="twitter" className="h-[20px]"/>
                        <img src="insta.svg" alt="instagram" className="h-[20px]"/>
                        <img src="facebook.svg" alt="facebook" className="h-[24px]"/>
                    </span>
                    <span className="flex flex-row gap-2 items-center justify-center mt-6">
                        <p className="text-sm sm:text-base">powered by</p>
                        <img src="power.svg" alt="powered by" />
                    </span>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap gap-8 sm:gap-24 sm:w-2/3 justify-center">
                    <div className="flex flex-col mb-6 sm:mb-0 text-center sm:text-left">
                        <h1 className="text-[#FF5C00] text-[20px] sm:text-[24px] mb-1">Navigate</h1>
                        <span className="text-white flex flex-col gap-2">
                            <p className="text-sm sm:text-base">Home</p>
                            <p className="text-sm sm:text-base">About Us</p>
                            <p className="text-sm sm:text-base">Contact</p>
                            <p className="text-sm sm:text-base">Blog</p>
                        </span>
                    </div>

                    <div className="flex flex-col mb-6 sm:mb-0 text-center sm:text-left">
                        <h1 className="text-[#FF5C00] text-[20px] sm:text-[24px] mb-1">Categories</h1>
                        <span className="text-white flex flex-col gap-2">
                            <p className="text-sm sm:text-base">Home</p>
                            <p className="text-sm sm:text-base">About Us</p>
                            <p className="text-sm sm:text-base">Contact</p>
                            <p className="text-sm sm:text-base">Blog</p>
                        </span>
                    </div>

                    <div className="flex flex-col text-center sm:text-left">
                        <h1 className="text-[#FF5C00] text-[20px] sm:text-[24px] mb-1">Features</h1>
                        <span className="text-white flex flex-col gap-2">
                            <p className="text-sm sm:text-base">Home</p>
                            <p className="text-sm sm:text-base">About Us</p>
                            <p className="text-sm sm:text-base">Contact</p>
                            <p className="text-sm sm:text-base">Blog</p>
                        </span>
                    </div>
                </div>
            </div>

            <p className="text-center text-white mt-14 text-xs sm:text-sm">Copyright © 2023 Saaspect. By Saaspect Inc | All rights reserved | Privacy Policy | Terms of use</p>
        </div>
        </>
    );
};
