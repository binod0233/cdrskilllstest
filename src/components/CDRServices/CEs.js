import { Button } from "react-bootstrap";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const CEs = () => {
  const navigate = useNavigate();
  const cardContent = [
    {
      images: "/images/CDRServices/highly.png",
      title: "Highly Experienced Specific Engineering",
      data: `
      Experienced writers at your 
      disposal to provide you with 
      a plagiarism-free report.`,
    },
    {
      images: "/images/CDRServices/approved.png",
      title: "100% Approval Rate",
      data: `
      Prominent service provider 
      that ensures your positive 
      report approval from EA.`,
    },
    {
      images: "/images/CDRServices/on-time.png",
      title: "On Time Delivery",
      data: `
      Proper structure and format 
      of CDR report delivered on 
      scheduled time.`,
    },
    {
      images: "/images/CDRServices/dollar.png",
      title: "Reasonable Price",
      data: `Reasonable Price
      Original content following 
      all the guidelines provided 
      at an affordable price. `,
    },
  ];
  return (
    <div>
      <Container className="p-md-5 px-5">
        {/* <Row>
        <Col md={7}>
          <Headings title="Things to consider before hiring a CDR writer"/>
        
        <Paragraphs data="We are renowned as Australia’s most successful CDR writing, RPL writing and 
KA02 writing service provider.The intellectual team of professional Writers, 
Experts, Engineers, IT Specialists, etc. provides high-quality CDR Services to 
the applicants. We help applicants from around the globe who want to 
migrate to Australia as a skilled workforce.
 

Our team of writers possess many years of experience in this field and are 
highly qualified personnel. We have almost a 97% success rate until now. 
We ensure an excellent quality CDR Report with original content.

"/>
</Col>


        <Col md={5}>
          <Row>
            <Col md={6}>
              <img src="images/CDRServices/highly.png" alt="highly experienced specific engineering"/>
              <h6>Highly Experienced Specific Engineering</h4>
              <p>Highly Experienced Specific Engineering Experienced writers at your disposal to provide you with a plagiarism-free report.</p>
              
            </Col>
          </Row>
        </Col>
        </Row> */}
        <div>
          <Container>
            <Row>
              <Col md={6} >
                <Headings
                  title="Things to consider before hiring a CDR writer
"
                />
                <div className="py-md-4 py-2">
                  <Paragraphs
                    data="We are renowned as Australia’s most successful CDR writing, RPL writing and 
              KA02 writing service provider.The intellectual team of professional Writers, 
              Experts, Engineers, IT Specialists, etc. provides high-quality CDR Services to 
              the applicants. We help applicants from around the globe who want to 
              migrate to Australia as a skilled workforce.
               
              
              Our team of writers possess many years of experience in this field and are 
              highly qualified personnel. We have almost a 97% success rate until now. 
              We ensure an excellent quality CDR Report with original content.
              
              
"
                  />
                </div>
                <div className='mobileScreenGuidelinesButton'>
                <Button
                  className="text-white px-4 "
                  style={{ background: "#017CC9 " }}
                  onClick={() => navigate("/cdr-sample")}
                >
                  Contact Us
                </Button>
                </div>
                
              </Col>
              <Col md={6} >
                <Row>
                  {cardContent.map((c, index) => (
                    <Col md={6} key={index} className="py-1 px-4 px-md-1">
                      <div className=" py-4 px-4 px-md-0" style={{ background: "#F8FCFF" }}>
                        <div className="d-flex justify-content-center mt-3"> 
                          <img
                            src={c.images}
                            alt="experience"
                            style={{
                              height: "80px",
                              width: "80px",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <p style={{ textAlign: "center", fontSize: "12px" }}>
                          <strong>{c.title}</strong>
                        </p>
                        <p style={{ textAlign: "center", fontSize: "12px" }}>
                          {c.data}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default CEs;
