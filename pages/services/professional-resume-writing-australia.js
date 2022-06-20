import React from "react";
import Head from 'next/head'
import {useRouter} from 'next/router'
import Con1 from "../../components/CDRReviewing/Con1";
import Section1 from "../../components/CDRWriting/Section1";
import Advantages from "../../components/CVResumeWriting/Advantages";
import Things from "../../components/CVResumeWriting/Things";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";

const CVResumeWriting = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrskillassessment.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
           <title>Professional Resume Writing in Australia | CDR Skill Assessment</title>
             <meta name="description" content="Looking forward to get assistance of CDRskillassessment for your resume writing. Knowabout importance of resume and how professional prepare it." />
             <link rel="canonical" href={canonicalUrl} />
           </Head>
     
      <Hero
        title="Writing CDR Resume for Engineers Australia"
        details="Reduce your chance of getting rejected by Engineers Australia to 0%. Expert 
        writers with years of experience in CDR Resume writing will make your CDR 
        report professional. 
        Our team of expert writers are ready to assist you; you are just a click away.
        "
      />
      <Section1
        title="CDRskillassessment’s professional CDR resume writing service ensures 
        approval from Engineers Australia"
        data="Resume writing is an essential component of the CDR Report. Thus, any Engineering Applicants who wish to travel to Australia via 
        CDR Skill Assessment must write a high-quality CDR resume that makes a favourable impression on Engineers Australia.
        Writing a 
        high-quality CDR resume is such laborious work for novice writers or applicants that there is a significant chance of making a 
        catastrophic error and getting rejected by Engineers Australia. Keeping this in mind, CDRskillassessment will assist you with CDR 
        resume writing for Engineers Australia. 
        We have a team of expert writers who can provide resume writing services at very low
        pricing. From our years of experience, we prepare flawless resumes. Engineers Australia (EA) has already Approved our CDR reports, 
        and many engineering Applicants are happy with our services; please stay connected with us for CDR Resume writing help        
"
        image="/images/CVResumeWriting/resume-writing.png"
      />
      <Con1 />
      <Things />
      <Advantages />
      <Hero2
        title="Want to know more? Our experts will clear your Doubt"
        data="We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of 
any inconvenience, feel free to contact our experts."
        buttonName="Contact an Expert"
      />
    </div>
  );
};

export default CVResumeWriting;
