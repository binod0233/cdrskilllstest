import React from "react";
import { Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const Tips = () => {
  return (
    <div>
      <Container>
        <Headings title="Tips for Engineers writing CDR Summary Satemment in Australia" />
        <Row className="p-5">
          <img
            src="/images/SummaryStatementWriting/four-text.png"
            alt="tips"
            className="img-fluid m-1"
          />
        </Row>
        <Paragraphs data="The following are the three types of indications that must be included in the Competency Element column:" />
        <h4
          className="ourCDRServicesTitle"
          style={{ color: "#203546", fontFamily: "Asap", fontWeight: "700" }}
        >
          1.Summary Statement Writing is based on Skill and Knowledge
        </h4>
        <Paragraphs
          data="Summary Statement writing is based on the knowledge and skill competency unit; it establishes the tone for the summary 
statement by asking the applicant to offer examples of broad engineering knowledge and skill. Looking at the many parts, 
it is clear that a comprehensive understanding of the abilities is essential."
        />
        <br />
        <h4
          className="ourCDRServicesTitle"
          style={{ color: "#203546", fontFamily: "Asap", fontWeight: "700" }}
        >
          2. Summary Statement Writing requires applicability to Engineering:{" "}
        </h4>
        <Paragraphs
          data="This is a crucial component that allows you to demonstrate your technical expertise and engineering skills. While writing 
a summary statement, you should carefully study each description to distinguish the signs and link them to the appropriate 
instances in your Career Episodes. 
The first element in this section can be used to demonstrate engineering problem-solving 
methods; the second element can be used to mention the tools, techniques, and resources used in the projects; the third 
element can be used to demonstrate the application of design processes, and the fourth element can be used to mention 
project management experience.
"
        />{" "}
        <br />
        <h4
          className="ourCDRServicesTitle"
          style={{ color: "#203546", fontFamily: "Asap", fontWeight: "700" }}
        >
          3. Personal and Professional Traits:{" "}
        </h4>
        <Paragraphs
          data="The professional and personal attributes competence unit focuses on soft factors such as communication, behavioural, social, 
and leadership aspects, such as ethics, team membership, creativity, and team leadership. "
        />
        <br />
        <h4
          className="ourCDRServicesTitle"
          style={{ color: "#203546", fontFamily: "Asap", fontWeight: "700" }}
        >
          4. 100% Genuine Content in Summary Statement Writing:{" "}
        </h4>
        <Paragraphs
          data="Our professionals can create a grand CDR with accurate data that can be readily verified. We make sure that your report is always 
one-of-a-kind so that Engineers Australia will assess it."
        />{" "}
        <br />
      </Container>
    </div>
  );
};

export default Tips;
