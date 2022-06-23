import React from "react";
import {useRouter} from 'next/router'
import Beforeutakehelp from "../../components/CDRWriting/Beforeutakehelp";
import Choose from "../../components/CDRWriting/Choose";
import DOu from "../../components/CDRWriting/DOu";
import Section1 from "../../components/CDRWriting/Section1";
import Wh from "../../components/CDRWriting/Wh";
import Whatdoes from "../../components/CDRWriting/Whatdoes";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import Head from "next/head";
import Script from 'next/script'

const CDRWriting = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrskillassessment.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
const  schemaData= {
  "@context": "http://schema.org",
  "@type": "Product",
  name: "CDR Report Writing Services for Engineers Australia",
  image: "https://cdrskillassessment.com/images/n2.png",
  description:
    "We provide personalised CDR reports prepared by CDR experts based on your degree and career.",
  url: "https://cdrskillassessment.com/services/cdr-writing-service-australia/",
  brand: {
    "@type": "Brand",
    name: "cdrskillassessment",
    logo: "https://cdrskillassessment.com/images/logo.png",
  },
  offers: {
    "@type": "Offer",
    price: "Negotiable",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 10,
    bestRating: 10,
    worstRating: 7,
    ratingCount: 20,
  },
}
  return (
    <div>
       <Script type="application/ld+json">
      {JSON.stringify(schemaData)}
</Script>
     <Head>
        <title>High-Quality CDR Report Writing Service for Engineers Australia</title>
        <meta name='description' content="Engineering Applicants seeking the best service provider for CDR Writing? Grab your high-quality CDR Report to get 100 % Approval from Engineers Australia."/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Hero
        title="CDR reports reviewed by CDRskillassessment 
has never been rejected by Engineers 
Australia."
        details="Reduce your chance of getting rejected from EA to 0%. Professional writers 
with years of experience in CDR report writing will help you develop flawless 
CDR. Our team of expert writers are ready to assist you; you are one click away."
      />
      <Section1
        title="Positive assessment of your CDR report by Engineers Australia."
        data="CDRskillassessment ensures an impeccable CDR report based on the specific format described by Engineers Australia in the MSA 
booklet. With a high success record of Competency Demonstration Report, CDR, approval from Engineers Australia, CDR Skill Assessment
provide the best CDR Writing Service for Engineers in Australia. Engineers Australia will review CDRreport submitted by engineering 
applicants who wish to migrate to Australia for skilled work.
Our comprehensive CDR report writing services for engineers include a detailed Curriculum Vitae, three Career Episodes (CEs), a 
Summary Statement (SS) for each CE, and Continuing Professional Development (CPD). Our reports are based on various variables, 
including your skills, expertise, work experience, academic achievements, and qualifications. We adhere to the rules set forth by the 
official assessing authorities, ensuring your positive assessment.
We have dedicated engineering teams with years of experience in CDR writing services. They'll walk you through the process and 
ensure a high approval rate from Engineers Australia. We provide high-quality non-plagiarized CDR reports. 
 "
        image="/images/CDRWriting/CDRwriting-services-final-1.png"
        alt="CDRwriting services"
      />
      <Wh />
      <DOu />
      <Choose />
      <Beforeutakehelp />
      <Whatdoes />
      <Hero2
        title="Want to know more? Our experts will clear your Doubt.	"
        data="We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of 
any inconvenience, feel free to contact our experts."
        buttonName="Contact an Expert"
      />
    </div>
  );
};

export default CDRWriting;
