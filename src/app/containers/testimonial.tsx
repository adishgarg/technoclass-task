"use client";
import dynamic from "next/dynamic";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"),{ssr:false});

export const Testimonial = () => {
  const testimonials = [
    {
      imgSrc: "image.png",
      name: "Yung Lee",
      quote:
        "Product description will be here in one small paragraph. Product description will be here in one small paragraph. Product description. Product description will be here in one small paragraph. Product description.",
    },
    {
      imgSrc: "image.png",
      name: "John Doe",
      quote:
        "Another product description will be here in one small paragraph. Another product description will be here in one small paragraph. Another product description.",
    },
    {
      imgSrc: "image.png",
      name: "Jane Smith",
      quote:
        "Yet another product description will be here in one small paragraph. Yet another product description will be here in one small paragraph. Yet another product description.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-[20px] sm:text-[28px] md:text-[32px] font-semibold text-center mb-6">
        Testimonials
      </h1>

      <div className="w-full px-4 sm:px-8 lg:px-16">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-8 mt-7 text-center"
            >
              <div className="flex justify-center w-full my-3">
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  className="rounded-full w-[120px] h-[120px] object-cover"
                />
              </div>
              <h2 className="text-[14px] sm:text-[22px] md:text-[24px] font-medium">
                {testimonial.name}
              </h2>
              <span className="relative block">
                <img
                  src="quote.svg"
                  alt="quote"
                  className="hidden md:block absolute -top-24  -z-10"
                />
                <p className="text-sm sm:text-base md:text-lg px-6 sm:px-12 md:px-16">
                  {testimonial.quote}
                </p>
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
