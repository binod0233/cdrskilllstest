import React from "react";

import About from "../components/Landing/About";
import Factors from "../components/Landing/Factors";
import Hero2 from "../components/Hero2";
import Steps from "../components/Landing/Steps";
import Approval from "../components/Landing/Approval";
import Faq from "../components/Landing/Faq";
import Hero from "../components/Hero";
// import Meta from "../components/Meta";

const Landing = () => {
  return (
    <div>
      {/* <Meta
        title="Best CDR Writing Service | CDR Skill Assessment"
        description="Want to get your CDR report approved by Engineers Australia in first go? Prepare your personalized report with all the mandatory components and plagiarism free"
      /> */}

      <Hero
        title="Get CDR Report approved by Engineers 
Australia On your first attempt."
        details="CDRskillassessment’s writers with years of experience in CDR report writing 
will present your skills, education and experience in the perfect format as 
prescribed by Engineers Australia. Contact us; we are eager to help you. "
      />
      <About />
      <Factors />
      <Approval />
      <Steps />
      <Faq />
      {/* <Reviews /> */}
      <Hero2
        title="We Ensure positive Assessment from Engineers Australia	"
        data="Professional services are available at the most competitive pricing through different relevant packages. Our writers will ensure 
that the findings are improved, proofread, and plagiarism-free."
        buttonName={"Check Pricing"}
        link="/pricing"
      />
    </div>
  );
};

export default Landing;
