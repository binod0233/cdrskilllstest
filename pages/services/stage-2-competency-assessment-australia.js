import React from "react";
import Head from "next/head"
import Choose from "../../components/CDRWriting/Choose";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import Expectations from "../../components/Expectations";
import Fourunits from "../../components/Stage2Competencyassessment/Fourunits";
import RequiredDocuments from "../../components/Stage2Competencyassessment/RequiredDocuments";
import {useRouter} from 'next/router'


const Stage2CometencyAssessment = () => {
        const router = useRouter()
  const canonicalUrl = (`https://cdrskillassessment.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
               <Head>
           <title>Stage 2 Competency Assessment Australia | CDR Skill Assessment</title>
             <meta name="description" content="Want to be a chartered member of Engineers Australia? Our professional writers prepare Stage 2 Competency Assessment displaying your skills on field of work." />
             <link rel="canonical" href={canonicalUrl} />
           </Head>
      <Hero
        title="Be a Chartered Member of Engineers Australia 
through Stage 2 Competency Assessment"
        details="Bring a career-long obligation to maintain competence in your engineering field 
with exclusive Chartered Membership of Engineers Australia. Develop a flawless 
Stage 2 Competency Assessment for Chartered membership of Engineers Australia"
      />
      <Fourunits />
      <Choose />
      <RequiredDocuments />
      <Expectations
        title="Stage 2 Competency Assessment will meet the following Expectations of EA"
        details="In Stage 2 Competency Assessment engineer will demonstrate engineering skill and knowledge to Engineers Australia for Chartered 
      membership. The community has certain expectations of seasoned professional engineers, including their expertise, application, and 
      behaviour. Experienced professional engineers are required as leaders and supervisors."
        list={[
          `Stage 2 Competency Assessed engineers recognize the demands of customers, a diverse set of stakeholders, and society as 
  a whole.
  `,
          `Chartered member Engineers in Australia have an understanding of the system, service, method, or program that optimizes 
  `,
          `social, environmental, and economic results.
  `,
          `Stage 2 Competency Assessment ascertains that the managerial contribution has been correctly incorporated into the overall 
  project, process, or program.
  `,
          `Chartered members of Engineers Australia communicate well with people from various disciplines, jobs, and backgrounds.
  `,
          `Chartered Professions of Engineers in Australia have knowledge on the assessment of technology potential by society, 
  corporations, and governments.
  `,
          `Stage 2 Competency Assessment ensures the greatest degree of feasibility, such policy decisions are sufficiently informed by 
  possibilities and ramifications for Engineers in Australia.
  `,
          `Stage 2 Competency Assessment assures the costs, risks, and restrictions are appropriately understood in relation to the intended 
  outcomes.
  `,
          `Stage 2 Competency Assessment brings knowledge from many sources to bear on the creation of solutions to complex problems 
  and difficulties.
  `,
          `Chartered members of Engineers Australia make certain that technical and non-technical factors are properly integrated.
  `,
          `Stage 2 Competency Assessment states both risk management and long-term sustainability are critical issues.
  `,
          `They ensure that all components of a project, program, or process were founded on theory and underlying principles.
  `,
          `Chartered member of Engineers Australia ensures that all components of a project, program, or process were founded on 
  theory and underlying principles.
  
  
  `,
        ]}
      />
      <Hero2
        title="Develop a flawless Stage 2 Competency Assessment to be a Chartered 
member of Engineers Australia.	"
        data="Engineers who wish to pursue an engineering career in Australia should prepare Stage 2 Competency Assessment demonstrating 
skills, knowledge and experience to be a Chartered member of Engineers Australia. Competency Demonstration Report is one of 
the most crucial documents for anyone looking to start a profession in Australia, as it presents your skills in writing"
        buttonName={"Get Free Samples"}
        link="/cdr-sample"
      />
    </div>
  );
};

export default Stage2CometencyAssessment;
