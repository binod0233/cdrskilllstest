import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SampleFor = ({ list }) => {
  return (
    <Container>
      <Row className="p-5">
        {list.map((l,i) => (
          <Col key={i} className="py-3 px-5" md={6}>
            <Row style={{minHeight:'160px'}}>
              <Col
                className="p-3 d-flex justify-content-center align-items-center "
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
                className="p-3"
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
  );
};

export default SampleFor;
