import Image from "next/image";
import Landing from "./containers/home";
import Content from "./containers/content";
// import { Carou } from "./components/carousel";
import { Testimonial } from "./containers/testimonial";
import ContactUs from "./containers/contactus";
import { Footer } from "./containers/footer";
export default function Home() {
  return (
   <>
   <Landing/>
   <Content/>
   {/* <Carou/> */}
   <Testimonial/>
   <ContactUs/>
   <Footer/>
   </>
  );
}
