import React from "react";
import Head from 'next/head'
import FourCol from "../../components/Samples/FourCol";
import WhyRely from "../../components/Samples/WhyRely";
import Section1 from "../../components/CDRWriting/Section1";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import FrequentlyAsked from "../../components/Samples/FrequentlyAsked";
import SampleList from "../../components/Samples/SampleList";
import WantTo from "../../components/Samples/WantTo";

const Samples = () => {
  return (
    <div>
       <Head>
           <title>Learn about various CDR report services we provide to different engineers and how we follow guidelines in MSA to prepare your report.</title>
             <meta name="description" content="Learn about various CDR report services we provide to different engineers and how we follow guidelines in MSA to prepare your report." />
           </Head>
      <Hero
        title="CDRskillassessment’s CDR reviewing service 
ensures approval of CDR from EA"
        details="Your draft of CDR may contain errors in various aspects. Our CDR reviewing 
service suggests the best ways to present your skills, knowledge, qualification 
and experience in writing for the approval of Engineers Australia."
      />
      <Section1
        title="CDR Samples for Engineers Australia"
        data="A flawless CDR report is key in obtaining positive Assessments from Engineers Australia (EA). It is essential to prepare a flawless 
CDR Report for all Engineering Applicants who desire to go to Australia on an Immigration to Australia PR VISA. We CDR Skill Assessment, 
also known as Australia's Best CDR Report Writing Service Provider, offer CDR Samples taken from previous approved CDR Reports 
by Engineers Australia (EA). Engineers Australia also known as EA is the primary regulating authority in charge of determining an 
engineer's competency for Skilled Migration. Writing a CDR Report is a Tough Task where Engineers need to mention all the details 
of their skills, knowledge, qualifications, and work Experience Effectively and Efficiently. The CDR sample consists of three career 
episodes, a summary statement, and CPD for getting positive Assessments from Engineers Australia (EA).
 CDR Report Sample is 
useful for all Engineering Applicants who are drafting a CDR Report on their own. Engineers Applicants should first look over the 
CDR Sample to get an idea and avoid mistakes. CDR Report Sample will assist Engineers in understanding the requirements of 
Engineers Australia's Migration Skill Assessment and preparing their CDR report appropriately. Engineers Australia recommends 
that all engineers follow the rules outlined in the MSA booklet to Avoid Being Rejected by Engineers Australia. Please check out 
our Free Samples, CDR Report Samples offered on our CDRskillassessment website is most likely a previously submitted CDR report, which 
must be saved in the Engineers Australia database. Whenever you copy and paste the text from the CDR Report sample, you would 
be committing plagiarism, which is completely prohibited, and your report will be rejected as a response. So, Engineers must use 
the CDR Report Samples as just a guide to learn the regulations and requirements of Engineers Australia to prevent rejection.
"
        image="/images/Samples/samples.png"
      />
      <FourCol />
      <WantTo />
      <SampleList />
      <WhyRely />
      <FrequentlyAsked />
      <Hero2
        title="Choose the best reviewing service provider to review your CDR for Engineers Australia"
        data="Engineers who wish to pursue an engineering career in Australia should write a CDR report to demonstrate skills, knowledge 
and experience to Engineers Australia. We have dedicated engineering teams with years of experience in CDR 
Reviewing Service for engineers in Australia."
        buttonName="Check Our Pricing"
        link="/pricing"
      />
    </div>
  );
};

export default Samples;
