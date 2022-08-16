import React from "react";
import { Container } from "react-bootstrap";
import Section1 from "../../components/CDRWriting/Section1";
import Head from "next/head";
import { useRouter } from "next/router";

// import Meta from "../../components/Meta";
import SamplesList from "../../components/Anzsco/AnzoList";
import Headings from "../../components/Headings";
import Hero2 from "../../components/Hero2";
import Paragraphs from "../../components/Paragraphs";

const Anzsco = () => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <div className="">
      {/* <Meta
        title="Engineer Australia ANZSCO | CDR Skill Assessment"
        description="Learn about various ANZSCO codes used for classifications of occupations and select the appropriate ANZSCO code that matches your career."
      /> */}
      <Head>
        <title>Engineer Australia ANZSCO | CDR Skill Assessment</title>
        <meta
          name="description"
          content="Learn about various ANZSCO codes used for classifications of occupations and select the appropriate ANZSCO code that matches your career."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Section1
        title="Engineers Australia ANZSCO Code for CDR"
        data="The Australian and New Zealand Standard Classification of Engineer’s occupations (ANZSCO) Codes define work duties for 
        all engineering professions in Australia and New Zealand. It is critical to choose the correct ANZSCO Code when assessing 
        engineers' migration skills through CDR. This is a method for collecting, publishing, and analyzing occupational statistics.
        Engineers pursuing careers in Australia must confirm relative ANZSCO code before proceeding for CDR skilled assessment. 
        You may access the ANZSCO code provided below and see whether you are eligible for the relevant engineering stream as 
        determined by Engineers Australia. As soon as you choose the right ANZSCO code, you would find the Medium and Long-
        Term Strategic Skill List (MLTSS) and the Short-Term Skilled Occupation List (STSOL), to know on which term your occupation 
        lies as defined by Engineers Australia.
         
 "
        image="/images/Anzsco/anzo.png"
        alt="Anzsco code"
      />
      <Container>
        <Headings title="ANZSCO Code List" />
        <Paragraphs data="Here is the List of ANZSCO codes and skilled occupation names for popular Engineering professions in Australia." />
      </Container>
      <SamplesList />
      <Container>
        <Headings
          title="Select the ANZSCO code that best fits your engineering qualification for 
Skilled Migration in Australia."
        />
        <Paragraphs
          data="ANZSCO code’s structure consists of five hierarchical divisions: major group, sub-major group, minor group, unit group and occupation 
as per Engineers Australia. At the most precise level of classification, the categories are referred to as 'occupations.' These are combined 
to create 'unit groups,' which are further subdivided into 'minor groups'. Minor groups are aggregated to form 'sub-major groups,' which 
are then aggregated to form 'major groups' at the highest level.
ANZSCO is a skill-based classification used to classify all occupations and jobs in the Australian and New Zealand labour markets. ANZSCO 
code defines engineer’s occupations according to their attributes and groups them on the basis of their similarity into successively broader 
categories for statistical and other types of analysis in Australia.
"
        />
      </Container>
      <Hero2
        title="Get CDR Report approved by Engineers Australia On your first attempt"
        data="CDRskillassessment’s writers with years of experience in CDR report writing will present your skills, education and experience in 
the perfect format as prescribed by Engineers Australia. Contact us; we are eager to help you"
        buttonName="Get Free Consultation"
      />
    </div>
  );
};

export default Anzsco;
