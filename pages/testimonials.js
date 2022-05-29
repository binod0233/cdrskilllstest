import React from "react";
import Hero3 from "../components/FAQ/Hero3";
// import Meta from "../components/Meta";
import TEstimonials from "../components/Testimonials/TEstimonials";

const Testimonials = () => {
  return (
    <div>
      {/* <Meta title="Testimonials" /> */}
      <TEstimonials />
      <Hero3
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
        buttonName1="Whatsapp"
        buttonName2="facebook"
      />
    </div>
  );
};

export default Testimonials;
