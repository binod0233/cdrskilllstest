import React from "react";
import {useRouter} from 'next/router'
import Hero from "../../components/Hero";
import Section1 from "../../components/CDRWriting/Section1";
import Section2 from "../../components/CareerEpisodeWriting/Section2";
import CDRskillassessmentoptions from "../../components/CareerEpisodeWriting/CDRskillassessmentoptions";
import Structure from "../../components/CareerEpisodeWriting/Structure";
import Whatmakes from "../../components/CareerEpisodeWriting/Whatmakes";
import Hero2 from "../../components/Hero2";
import Head from "next/head";

const CareerEpisodeWriting = () => {

  const router = useRouter()
  const canonicalUrl = (`https://cdrskillassessment.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
        <title>CDR Three Career Episode Report Writing for Engineers Australia</title>
        <meta name='description' content="Get your Three Career Episode Report  for CDR migration skill Assesment for Engineers Australia from Our Professional writers of Enginnering Backgrounds."/>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Hero
        title="Engineers Australia will reject career Episode 
report not written in a perfect format."
        details="One should prepare and upload three career episode reports describing 
engineering experiences through which you believe you developed and 
demonstrated Stage 1 competency. CDRskillassessment provides the best
Career Episode Writing Service in Australia. "
      />

      <Section1
        title="Career Episode Report Writing Service Provider in Australia"
        data="The most critical aspect of CDR authoring is the Career Episodes report writing. Making an impression on Engineers Australia 
necessitates a greater degree of care and effort. Career Episode report writing is based on three separate projects completed 
during your final year of engineering, internship program, or work-related tasks. Our expert team offers Career Episode Writing 
Service in Australia based on your professional experiences, aiding you to create each of the three career episodes distinctively.
To write a Career Episode report, one must select a unique incident or theme linked to their academic and professional life and 
build on it to demonstrate how the engineer employed various competencies to handle that particular project.
We provide the 
best career episode writing report service for Engineers Australia with safe and dependable instructions based on our experience 
writing more than 200 Career Episodes reports to date with a 100% success rate. Engineers Australia will most likely request that 
engineers write their CDR Report on their own to demonstrate communication abilities to the assessor. However, if you submit a 
poorly written CDR to the EA, Engineers Australia will immediately reject your CDR report.
"
        image="/images/CareerEpisodeWriting/Report-Writing-final1.png"
        alt="CDRwriting services"
      />
      <Section2 />
      <CDRskillassessmentoptions />
      <Structure />
      <Whatmakes />
      <Hero2
        title="Get your Career Episode report Approved and Accepted.	"
        data="A satisfied customer is the best business strategy of all. We successfully made a decent track record of getting approvals for 
CDR reports that we have prepared for Engineers Australia.
Professional writers with years of experience are ready to assist you.
"
        buttonName={" Get Free Consultation"}
      />
    </div>
  );
};

export default CareerEpisodeWriting;
