'use client';

import Landing from "./containers/home";
import Content from "./containers/content";
// import { Carou } from "./components/carousel";
import ContactUs from "./containers/contactus";
import { Footer } from "./containers/footer";
import dynamic from "next/dynamic";
import TestimonialWrapper from "./containers/testimonialwrap";
export default function Home() {
  return (
   <>
   <Landing/>
   <Content/>
   {/* <Carou/> */}
   <TestimonialWrapper/>
   <ContactUs/>
   <Footer/>
   </>
  );
}
