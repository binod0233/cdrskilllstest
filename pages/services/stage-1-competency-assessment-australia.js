import React from "react";
import Head from 'next/head'
import {useRouter} from 'next/router'
import Choose from "../../components/CDRWriting/Choose";
import Section1 from "../../components/CDRWriting/Section1";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import EA from "../../components/Stage1Competencyassessment/EA";
import Elements from "../../components/Stage1Competencyassessment/Elements";
import OccupationalCategories from "../../components/Stage1Competencyassessment/OccupationalCategories";

const Stage1CompetencyAssessment = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrskillassessment.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];


  return (
    <div>
      <Head>
        <title>Stage 1 Competency Assessment Australia | CDR Skill Assessment</title>
        <meta name='description' content="Want to be a qualified engineer of Engineers Australia? We provide the best service for assisting engineers to prepare flawless stage 1 competency assessment."/>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Hero
        title="Get your Engineering qualification approved 
by Engineers Australia through Stage 1 
Competency Assessment. "
        details="Engineers Australia membership is ensured from the approval of Stage 1 
Competency Assessment. Professional writers with years of experience in 
developing flawless Stage 1 Competency Assessment at CDRskillasssessment 
assist engineers to be eligible for a member of Engineers Australia."
      />
      <Section1
        title="Be a member of Engineers Australia, Show your competency through 
Stage 1 Assessment"
        data="Stage 1 skill assessment is for engineers who need to recognize their skills with Engineers Australia to broaden their scope 
of jobs and elevate their careers. Stage 1 Competency Assessment is the level of competency needed for entry to practice 
as a qualified member of the engineering team. 
Engineers offshore prepare for Stage 1 Competency Assessment to elevate 
engineering career by becoming member of Engineers Australia. Being a member of Engineers Australia helps secure jobs 
in most organisations for engineering professionals. Stage 1 Competency Assessment falls under the Engineers Australia 
membership requirement. 
CDRskillassessment helps you write the Stage 1 Competency Assessment that will secure you a 
job and fulfil the requirement to be a member of Engineers Australia. To be eligible for membership in Engineers Australia, 
one needs to complete an engineering qualification that is accredited and recognised by Engineers Australia or get Stage 1 
competency Assessment approved. Stage 1 is the degree of competency required for admittance into the engineering team 
as a qualified member and corresponds to completing an acknowledged or recognised educational qualification. Writing 
Stage 1 Competency Assessment determines whether or not you are eligible for membership.
Stage 1 Competency signifies you have a deep comprehension of the corpus of engineering knowledge relevant to your 
occupational category (Professional Engineer, Engineering Technologist, or Engineering Associate) and the capacity to 
apply this knowledge to issues and circumstances that indicate practitioners in your professional category's duties.
"
        image="/images/Stage1CompetencyAssessment/com.png"
        alt="Competency-Assessment-Help-stage-1-yellow"
      />
      <OccupationalCategories />
      <Elements />
      <Choose />
      <EA />
      <Hero2
        title="Want to know more? Our experts will clear your Doubt.	"
        data="We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of 
any inconvenience, feel free to contact our experts."
        buttonName={"Contact an Expert"}
      />
    </div>
  );
};

export default Stage1CompetencyAssessment;
