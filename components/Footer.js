import { Button, Col, Row } from "react-bootstrap";
import Link from 'next/link'
import {useRouter} from 'next/router'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  const router = useRouter('')
  return (
    <div className="wholeFooter" >
      <Row className="upperFooter px-md-5 px-2">
        <Col
          xs={6}
          md={3}
          style={{
            fontFamily: "Asap",
            fontWeight: "400",
            paddingRight: "30px",
            color: "#747474",
          }}
          className="footerAboutUs"
        >
          <strong style={{ color: "#203546" }}>About Us</strong>
          <br />
          CDRskillassessment is an independent organization driven by
          professional writers that offer all engineering professionals the best
          help and guidance with the finest CDR writing and reviewing services
          for immigration to Australia. The amazing Team of Professional Writers
          at CDRskillassessment are Australian with a solid understanding of
          Engineers Australia&apos;s stringent criteria outlined in the MSA manual
          <br />
          <br />
          <strong>Follow us on</strong>
          <br />
          <div
            className="d-flex justify-content-start"
            style={{ fontSize: "20px" }}
          >
            <a
              href="https://twitter.com/CdrSkill"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <img src="/images/s3.png" alt="" className="img-fluid ms-2" />
            </a>
            <a
              href="https://www.facebook.com/CDRSkill-Assessment-114392794578547"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <img src="/images/s2.png" alt="" className="img-fluid " />
            </a>
            <a
              href="https://www.instagram.com/cdrskillassessment/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <img src="/images/s0.png" alt="" className="img-fluid ms-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/cdr-skill-assessment-883648238/"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
                marginleft: "10px",
              }}
            >
              {" "}
              <img src="/images/s1.png" alt="" className="img-fluid ms-2" />
            </a>
          </div>
        </Col>

        <Col
          xs={6}
          md={3}
          className="mb-4 "
          style={{ fontFamily: "Asap", fontWeight: "400", color: "#203546" }}
        >
          <strong className="footerTitle">Services</strong>
          <br />
          <Link
            className="footerServices"
            href="/services/cdr-writing-service-australia"
          >
            <a style={{color:"#747474",textDecoration:'none'}}>

            CDR Writing
            </a>
          </Link>
          <br />
          <Link
            className="footerServices"
            href="/services/career-episode-writing-australia"
          >
            <a style={{color:"#747474",textDecoration:'none'}}>
              
            Career Episode Writing
            </a>
          </Link>
          <br />
          <Link
            className="footerServices"
            href="/services/summary-statement-writing-australia"
          >
            <a style={{color:"#747474",textDecoration:'none'}}>

            Summary Statement Writing
            </a>
          </Link>
          <br />
          <Link
            className="footerServices"
            href="/services/stage-1-competency-assessment-australia"
          >
            <a style={{color:"#747474",textDecoration:'none'}}>

            Stage 1 Competency Assessment
            </a>
          </Link>
          <br />
          <Link
            className="footerServices"
            href="/services/stage-2-competency-assessment-australia"
          >
            <a style={{color:"#747474",textDecoration:'none'}}>

            Stage 2 Competency Assessment
            </a>
          </Link>
          <br />
          <Link
            className="footerServices"
            href="/services/cdr-reviewing-australia"
          >
            <a style={{color:"#747474",textDecoration:'none'}}>

            CDR Reviewing
            </a>
          </Link>
          <br />
          <Link
            className="footerServices"
            href="/services/plagiarism-checking-and-removal"
          >
            <a style={{color:"#747474",textDecoration:'none'}}>

            CDR Plagiarism Checking & Removal
            </a>
          </Link>
          <br />
          <Link
            className="footerServices"
            href="/services/professional-resume-writing-australia"
          >
            <a style={{color:"#747474",textDecoration:'none'}}>

            Resume Writing
            </a>
          </Link>
        </Col>
        <Col xs={6} md={3} style={{ fontFamily: "Asap", fontWeight: "400" }}>
          <strong>Quick Links</strong>
          <br />
          <Link className="footerServices" href="/blogs">
            <a style={{color:"#747474",textDecoration:'none'}}>

            Blogs
            </a>
          </Link>

          <br />
          <Link className="footerServices" href="/contact-us">
            <a style={{color:"#747474",textDecoration:'none'}}>

            Contact Us
            </a>
          </Link>

          <br />
          <Link className="footerServices" href="/our-agents">
            <a style={{color:"#747474",textDecoration:'none'}}>

            Meet Our Advisors
            </a>
          </Link>

          <br />
          <Link className="footerServices" href="/testimonials">
            <a style={{color:"#747474",textDecoration:'none'}}> 

            Testimonials
            </a>
          </Link>

          <br />
          <Link className="footerServices" href="/disclaimer">
            <a style={{color:"#747474",textDecoration:'none'}}>

            Disclaimer
            </a>
          </Link>

          <br />
          <Link className="footerServices" href="/refund-policy">
            <a style={{color:"#747474",textDecoration:'none'}}>

            Refund Policy
            </a>
          </Link>

          <br />
        </Col>
        <Col xs={6} md={3} style={{ fontFamily: "Asap", fontWeight: "400" }}>
          <img
            src="/footerLogo.png"
            alt="logo"
            style={{ height: "100px", marginLeft: "-50px", marginTop: "-20px" }}
            className="img-fluid"
          />
          <br />
          <LocationOnIcon />
          &nbsp;&nbsp;&nbsp;&nbsp;Sydney, Australia
          <br />
          <a
            style={{ textDecoration: "none", color: " #203546" }}
            href="mailto:info@cdrskillassessment.com"
          >
            <MailOutlineIcon />
            &nbsp;&nbsp;
            info@cdrskillassessment.com
          </a>
          <br />
          <a
            style={{ textDecoration: "none", color: "#203546" }}
            href="https://api.whatsapp.com/send?phone=+61481615807"
          >
            <WhatsAppIcon />
            &nbsp;&nbsp;&nbsp;+61 481 615 807
          </a>
          <br />
          <br />
          <strong>Request a Sample</strong> <br />
          <Button>
            <a
              href="mailto:download@cdrskillassessment.com"
              style={{ textDecoration: "none", color: "white" }}
            >
              Request through mail
            </a>
          </Button>
          <br />
        </Col>
      </Row>
      <Row className="lowerFooter text-white">
        <p style={{ fontFamily: "Asap" }}>
          {" "}
          <span style={{ float: "left" }}>
            All rights reserved | Copyright © cdrskillassessment.com
          </span>
          <span
            className="me-md-5 pe-md-5"
            style={{ float: "right", cursor: "pointer", fontWeight: "400" }}
            onClick={() => router.push("/refund-policy")}
          >
            Refund Policy
          </span>
          <span
            className="me-5 pe-5"
            style={{ float: "right", cursor: "pointer", fontWeight: "400" }}
            onClick={() => router.push("/privacy-policy")}
          >
            Terms and conditions
          </span>
        </p>
      </Row>
    </div>
  );
};

export default Footer;
