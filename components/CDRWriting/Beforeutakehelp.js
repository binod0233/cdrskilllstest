import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const Beforeutakehelp = () => {
  const considerations = [
    {
      title: "1.	CDR Writing Service provider based in Australia.",
      details: `Most of the CDR writing service providers are not based in Australia. CDR 
    report written by such consultants may be accepted. However, they may 
    not frequently keep up with Australian Engineering Scenarios because 
    they are headquartered outside Australia. CDRskillassessment provides 
    you with an edge in this regard as we are located in Australia. We help 
    you choose the best engineering career in the Australian Engineering 
    scene. Furthermore, our CDR Writing Service is based in Australia; we 
    ensure that it meets Australian standards.`,
      image: "/images/CDRWriting/before3.png",
      alt: "",
    },
    {
      title: "2. CDR should be prepared by an Engineering writer.",
      details: `Nowadays, several CDR Consultants provide CDR Writing Services. However, 
    many are academic writers rather than engineers or scientists. An engineer 
    is required to pass an engineering evaluation. You must be cautious not to 
    jeopardise your application by hiring a writer rather than an engineer with 
    writing abilities. A writer with an engineering background well understands 
    engineers Australia's CDR criteria. We have skilled and experienced engineer 
    writers that will help and guide you in the proper direction while producing 
    high-quality material tailored to your unique requirements.`,
      image: "/images/CDRWriting/before2.png",
      alt: "",
    },
    {
      title:
        "3. CDR writing service Provider that is familiar with Immigration in Australia.",
      details: `Every CDR writing service provider should be familiar with the immigration 
    procedure followed by the Australian government, especially relating to the 
    skilled migration of engineers. They should know how the immigration 
    process is carried out from the beginning to the end of the visa application 
    process and successful visa approval. 
    Although CDR writing service mainly 
    deals with getting a positive assessment from Engineers Australia in the 
    migration skill assessment process, they need to consider the other processes 
    of the immigration application process. They should be aware of all the 
    requirements and criteria that must be met before the visa application
    process, such as determining the talents in demand, the kind of visa 
    appropriate for the applicant's eligibility, skill assessment, and IELTS score, 
    and the filing of an Expression of Interest (EOI). 
    After the EOI is approved, an 
    invitation to apply for a visa is issued. They must understand the significance 
    of a solid CDR to receive a successful visa acceptance letter. 
    `,
      image: "/images/CDRWriting/before1.png",
      alt: "",
    },
  ];
  return (
    <div style={{ background: "#E5E5E5", paddingBottom: "20px" }}>
      <Container className="pt-4">
        <Headings
          title="Before you take help from any CDR report writing service provider,you need 
to consider a few things. "
        />
        {considerations.map((c,i) => (
          <Row key={i} className="my-4">
            <Col md={8} xs={12}>
              <div
                className="px-4 py-4"
                style={{
                  background: " #FFFFFF",
                  boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.25)",
                  borderRadius: " 10px",
                }}
              >
                <h4
                  className="ms-3 ourCDRServicesTitle"
                  style={{
                    fontFamily: "Asap",
                    color: "#017CC9",
                    fontWeight: "700",
                  }}
                >
                  {c.title}
                </h4>
                <Paragraphs data={c.details} />
              </div>
            </Col>
            <Col md={4} xs={12} className="px-5 pb-5">
              <img src={c.image} alt={c.alt} className="img-fluid" />
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Beforeutakehelp;
