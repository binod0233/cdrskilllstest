import React from "react";
import Head from "next/head"
import {useRouter} from 'next/router'
import Choose from "../../components/CDRWriting/Choose";
import Section1 from "../../components/CDRWriting/Section1";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import Part1 from "../../components/SummaryStatementWriting/Part1";
import Tables from "../../components/SummaryStatementWriting/Tables";
import Tips from "../../components/SummaryStatementWriting/Tips";

const SummaryStatementWriting = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrskillassessment.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      
      <Head>
           <title>Summary Statement Writing Australia | CDR Skill Assessment</title>
             <meta name="description" content="Looking forward to appoint summary statement writing service provider. Know about summary statement and how our skilled writer demonstrates your skills and features." />
             <link rel="canonical" href={canonicalUrl} />

           </Head>
      <Hero
        title="A page-long Summary Statement is the 
‘Heart’ of CDR Skill Assessments Australia"
        details="CDR Summary Statement for Engineers Australia is centred on the significant 
focal section of three career experiences. Our writers are skilled at aiding to 
write the ideal summary statement of your professional experience.
 
"
      />
      <Section1
        title="Prepare a flawless Summary statement to get CDR approved by EA"
        data="A CDR Summary Statement may be one page long, but it does not diminish its significance for Engineers Australia. It is centred on 
       the significant focal section of your three career experiences. The summary statement's contents are the competency aspects claimed 
       by you, demonstrating how and where you have achieved/applied the claims in your professional episodes. Our writers are skilled at 
       aiding you in creating the ideal summary statement for your professional experience.
       Even though the Summary statement written for 
       Engineers Australia is just a page long, it has huge importance in the CDR report. Summary statement writing in Australia is based on 
       three career episodes based on various engineering experiences you've had during your career. The summary statement's contents are 
       competency aspects that you claim and how you utilised and attained those elements over your professional episodes. 
       Our expert 
       writers are always eager to assist you in drafting appealing career episodes based on your professional expertise to include in Summary 
       statement writing, making us the best Summary Statement service provider in Australia. Summary statement writing is solely based on 
       the information you provide about your education and work experience. 
       "
        image="/images/SummaryStatementWriting/High-Quality-Summary-Statement-Writing-Service-yellow.png"
        alt="High-Quality-Summary-Statement-Writing-Service-yellow"
      />
      <Part1 />
      <Choose />
      <Tables />
      <Tips />
      <Hero2
        title="Want to know more? Our experts will clear your Doubt.	"
        data="We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of 
any inconvenience, feel free to contact our experts."
        buttonName="Contact an Expert"
      />
    </div>
  );
};

export default SummaryStatementWriting;
