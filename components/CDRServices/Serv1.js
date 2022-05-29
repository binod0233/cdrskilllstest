import React from "react";
import { Container, Row } from "react-bootstrap";
import Paragraphs from "../Paragraphs";

const Serv1 = () => {
  return (
    <div>
      <Container className="pt-5 pt-md-0">
        <h2
          className="  pt-5"
          style={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textAlign: "Center",
          }}
        >
          CDR Services
        </h2>
        <Paragraphs
          data=" We know how difficult it might be to prepare your CDR report all by
          yourself. CDR report writing on your own is a good effort, but what if
          all those efforts tend to be meaningless when EA rejects your
          application for a small mistake? So for this very reason,
          CDRskillassessment is here for your assistance. Being one of the
          well-known online sources, we are here to help those searching for
          professional and experienced CDR report writers. We provide online
          services for complete CDR report preparation, career episode writing,
          summary statements, CPD writing, CDR reviewing, and tutoring. CDR
          reports for skill assessment assessed by EA and the RPL report
          assessed by the Australian Computer Society. We make sure you will get
          the genuine report and get approved by the EA."
        />

        <Row>
          <img
            src="/images/CDRServices/report-writing.png"
            alt="report writing"
            className="img-fluid"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Serv1;
