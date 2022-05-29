import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

const Hero3 = ({ title, data, buttonName1, buttonName2 }) => {
  return (
    <div className="acceptedBackgrounded ">
      <Container className="pt-3">
        <h1 className="CDRReportAcceptedHeading">{title}</h1>
        <p className="CDRReportAcceptParagraph">{data}</p>
        <Row className="d-flex justify-content-center">
          <Button
            className="CDRReportAcceptButton me-3"
            style={{
              width: "fit-content",
              color: "white",
              padding: "4px 20px",
              background: " #017CC9",
              border: "none",
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            <a
              href="https://api.whatsapp.com/send?phone=61481615807"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              <WhatsAppIcon />
             {buttonName1}
            </a>
          </Button>
          <Button
            className="CDRReportAcceptButton"
            style={{
              width: "fit-content",
              color: "white",
              padding: "4px 20px",
              background: " #017CC9",
              border: "none",
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            <a
              href="https://www.facebook.com/CDRSkill-Assessment-114392794578547"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              <FacebookIcon />
              {buttonName2}
            </a>
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Hero3;
