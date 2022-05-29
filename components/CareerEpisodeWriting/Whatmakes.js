import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";

const Whatmakes = () => {
  const list = [
    {
      image: "/images/CareerEpisodeWriting/Unique-Content.png",
      title: `1. 100% Unique Content`,
      details: `Our professionals may create superb Career Episode 
  report writing using accurate data that is easily verifiable.
  We make sure that your report is always one-of-a-kind.`,
    },
    {
      image: "/images/CareerEpisodeWriting/free4.png",
      title: `2. 100% Plagiarism Free `,
      details: `Our professional experts are well known for the guideline 
  and format of Career Episode Report writing so they use 
  various types of plagiarism tools and make 100 % original 
  (CER).`,
    },
    {
      image:
        "/images/CareerEpisodeWriting/Engineer-Writers-with-Years-of-Experience2 (1).png",
      title: `3. Engineer Writers with Years of Experience.`,
      details: `CDRskillassessment’s staff includes highly trained 
  and experienced engineers from various technical 
  domains, ensuring flawless CDR Career Episode 
  Writing Service in Australia.`,
    },
    {
      image: "/images/CareerEpisodeWriting/Most-Reasonable-Prices.png",
      title: `4. Most Reasonable Prices`,
      details: `CDRskillassessment provides you with Career Episode Writing 
  Service in Australia at reasonable pricing and high-quality 
  service. In reality, you may get our CDR Career Episode Writing 
  Services for a low cost that is reasonable to everyone.`,
    },
    {
      image: "/images/CareerEpisodeWriting/Approval.png",
      title: `5. Approval Rate of 100%`,
      details: `Engineers Australia's requirements are well known to our 
  expertise. CDRskillassessment is the best career episodes 
  writing service provider for Engineers Australia. We are 
  delighted to say that our CDR has always been certified 
  by Engineers Australia (EA) on the first attempt. `,
    },
    {
      image: "/images/CareerEpisodeWriting/one-time-Delivery.png",
      title: `6. On-Time Delivery`,
      details: `We set reasonable deadlines for you and ourselves. We interact 
  with you regularly to provide information aswe go, and we 
  complete the CER, and the entire CDR report a week ahead of 
  schedule. The earlier you place your order, the better the CER 
  and overall CDR report we can provide.`,
    },
  ];
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <Container className="p-5">
        <Headings title="What makes our Career Episode Writing Service No. 1 in Australia." />
        <Row className="p-md-5">
          {list.map((l) => (
            <Col className="py-3 px-md-5" sm={6} md={6}>
              <Row style={{}}>
                <Col
                  className="p-md-3 d-flex justify-content-center align-items-center "
                  xs={3}
                  md={3}
                  style={{
                    backgroundColor: "#017CC9",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                >
                  <img src={l.image} className="mr-5 img-fluid " />
                </Col>
                <Col
                  className="p-3" xs={9}
                  md={9}
                  style={{
                    backgroundColor: "#FFF",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <h5
                    style={{
                      fontFamily: "Asap",
                      fontWeight: "700",
                      fontSize: "16px",
                    }}
                  >
                    {l.title}
                  </h5>
                  <p
                    style={{
                      fontFamily: "Asap",
                      fontWeight: "400",
                      fontSize: "13px",
                    }}
                  >
                    {l.details}
                  </p>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Whatmakes;
