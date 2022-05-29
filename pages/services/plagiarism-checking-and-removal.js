import React from "react";

// import Meta from "../../components/Meta";
import Hero2 from "../../components/Hero2";
import Hero from "../../components/Hero";
import Section1 from "../../components/CDRWriting/Section1";
import Plag2 from "../../components/CDRPlagiarismCheckingandRemoval/Plag2";
import Advantages1 from "../../components/CDRPlagiarismCheckingandRemoval/Advantages1";

const CDRPlagiarismCheckingandRemoval = () => {
  return (
    <div>
      {/* <Meta
        title="Plagiarism Checking and Removal Service | CDR Skill Assessment"
        description="Looking forward to get your CDR report approved by the EA hassle free, we provide you a team finalized plagiarism free and removed CDR report for engineers. "
      />{" "} */}
      <Hero
        title="Plagiarism checking and removing service for ensured Assessment of CDR fromEngineers Australia."
        details="Reduce your chance of getting rejected by Engineers Australia to 0%. Professional writers with years of experience in plagiarism checking and removal services will make your CDR report 100% plagiarism-free. "
      />
      <Section1
        title="Our service includes checking for plagiarism in your CDR for Engineers Australia and removing it"
        data="Engineering applicants in Australia write CDR without the help of a plagiarism checking and removing service provider and may unintentionally utilise plagiarised material and data.  Plagiarism is using someone else’s original content and idea as your own without proper credit to the creator. Engineers Australia does not tolerate plagiarised content in the CDR submitted. Plagiarised content in CDR may result in a ban by Engineers Australia.As per the Migration Skilled Assessment (MSA) booklet published by Engineers Australia, plagiarism is not allowed in the CDR report.  Copying data, information, or other material from  books,  websites,  journals, magazines,  digital  platforms,  CDR  samples  available 
        online  and  offline,  or  previously  submitted  CDRswith  plagiarismis  strictly  prohibited  by Engineers Australia. We  have  dedicated  engineering  teams  with  years  of  experience  in  CDR  plagiarism checking  and  removing servicesin  Australia.  Our  experts  will  walk  you  through  the process  and  ensure  a  high  approval  rate  from  Engineers  Australia.  We  provide  high-quality non-plagiarized CDR reports
"
        image="/images/CDRPlagiarismCheckingandRemoval/CDR-Plagiarism.png"
        alt="CDR Plagiarism"
      />
      <Plag2 />
      <Advantages1 />
      <Hero2
        title="Want to know more? Our experts will clear your Doubt"
        data="We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of 
any inconvenience, feel free to contact our experts. "
        buttonName="Contact an Expert"
      />
    </div>
  );
};

export default CDRPlagiarismCheckingandRemoval;
