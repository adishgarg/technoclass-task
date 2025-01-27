'use client';

import dynamic from "next/dynamic";

const Testimonial = dynamic(() => import("../components/testimonial"), { ssr: false });

export default function TestimonialWrapper() {
  return <Testimonial />;
}
