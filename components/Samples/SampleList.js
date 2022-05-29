import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import SampleCard from "./SampleCard";

const SampleList = () => {
  const list = [
    {
      image: "/images/Samples/engineeringManager.png",
      title: "ENGINEERING MANAGER",
      code: "ANZSCO CODE: 133211",
      link: "/cdr-sample/engineering-manager",
    },
    {
      image: "/images/Samples/chemical.png",
      title: "CHEMICAL ENGINEER",
      code: "ANZSCO CODE: 233111",
      link: "/cdr-sample/chemical-engineer",
    },
    {
      image: "/images/Samples/materials.png",
      title: "MATERIALS ENGINEER",
      code: "ANZSCO CODE: 233112",
      link: "/cdr-sample/material-engineer",
    },
    {
      image: "/images/Samples/civil.png",
      title: "CIVIL ENGINEER",
      code: "ANZSCO CODE: 233211",
      link: "/cdr-sample/civil-engineer",
    },
    {
      image: "/images/Samples/geotechnical.png",
      title: "GEOTECHNICAL ENGINEER",
      code: "ANZSCO CODE: 233212",
      link: "/cdr-sample/geotechnical-engineer",
    },
    {
      image: "/images/Samples/structural.png",
      title: "STRUCTURAL ENGINEER",
      code: "ANZSCO CODE: 233214",
      link: "/cdr-sample/structural-engineer",
    },
    {
      image: "/images/Samples/transport.png",
      title: "TRANSPORT  ENGINEER",
      code: "ANZSCO CODE: 233215",
      link: "/cdr-sample/transport-engineer",
    },
    {
      image: "/images/Samples/electrical.png",
      title: "ELECTRICAL ENGINEER",
      code: "ANZSCO CODE: 233311",
      link: "/cdr-sample/electrical-engineer",
    },
    {
      image: "/images/Samples/electronics.png",
      title: "ELECTRONICS ENGINEER",
      code: "ANZSCO CODE: 233411",
      link: "/cdr-sample/electronics-engineer",
    },
    {
      image: "/images/Samples/industrial.png",
      title: "INDUSTRIAL ENGINEER",
      code: "ANZSCO CODE: 233511",
      link: "/cdr-sample/industrial-engineer",
    },
    {
      image: "/images/Samples/mechanical.png",
      title: "MECHANICAL ENGINEER",
      code: "ANZSCO CODE: 233511",
      link: "/cdr-sample/mechanical-engineer",
    },
    {
      image: "/images/Samples/production.png",
      title: "Production or Plant Engineer",
      code: "ANZSCO CODE: 233513",
      link: "/cdr-sample/production-or-plant-engineer",
    },
    {
      image: "/images/Samples/mining.png",
      title: "MINING ENGINEER",
      code: "ANZSCO CODE: 233611",
      link: "/cdr-sample/mining-engineer",
    },

    {
      image: "/images/Samples/petroleum.png",
      title: "PETROLEUM ENGINEER",
      code: "ANZSCO CODE: 233612",
      link: "/cdr-sample/petroleum-engineer",
    },
    {
      image: "/images/Samples/aeronautical.png",
      title: "AERONAUTICAL ENGINEER",
      code: "ANZSCO CODE: 233911",
      link: "/cdr-sample/aeronautical-engineer",
    },
    {
      image: "/images/Samples/agricultural.jpg",
      title: "AGRICULTURAL ENGINEER",
      code: "ANZSCO CODE: 233912",
      link: "/cdr-sample/agricultural-engineer",
    },
    {
      image: "/images/Samples/biomedical.png",
      title: "BIOMEDICAL ENGINEER",
      code: "ANZSCO CODE: 233913",
      link: "/cdr-sample/biomedical-engineer",
    },
    {
      image: "/images/Samples/technologist.png",
      title: "ENGINEERING TECHNOLOGIST",
      code: "ANZSCO CODE: 233914",
      link: "/cdr-sample/engineering-technologist",
    },
    {
      image: "/images/Samples/environmental.png",
      title: "ENVIRONMENTAL ENGINEER",
      code: "ANZSCO CODE: 233915",
      link: "/cdr-sample/environmental-engineer",
    },
    {
      image: "/images/Samples/professionals.png",
      title: "ENGINEERING PROFESSIONALS",
      code: "ANZSCO CODE: 233999",
      link: "/cdr-sample/engineering-professionals",
    },
    {
      image: "/images/Samples/computerNetwork.png",
      title: "COMPUTER NETWORK AND SYSTEMS ENGINEER",
      code: "ANZSCO CODE: 233311",
      link: "/cdr-sample/computer-network-and-system-engineer",
    },
    {
      image: "/images/Samples/telecommunicationNetwork.png",
      title: "TELECOMMUNICATIONS NETWORK ENGINEER",
      code: "ANZSCO CODE: 233411",
      link: "/cdr-sample/telecommunications-network-engineer",
    },
    {
      image: "/images/Samples/civilTechnician.png",
      title: "CIVIL ENGINEERING TECHNICIAN",
      code: "ANZSCO CODE: 233511",
      link: "/cdr-sample/civil-engineering-technician",
    },
    {
      image: "/images/Samples/civilDraftsPerson.png",
      title: "CIVIL ENGINEERING DRAFTSPERSON",
      code: "ANZSCO CODE: 233511",
      link: "/cdr-sample/civil-engineering-draftsperson",
    },
    {
      image: "/images/Samples/electricalDraftsperson.png",
      title: "ELECTRICAL ENGINEERING DRAFTSPERSON",
      code: "ANZSCO CODE: 312311",
      link: "/cdr-sample/electrical-engineer-draftsperson",
    },
    {
      image: "/images/Samples/electricalTechnician.png",
      title: "ELECTRICAL ENGINEERING TECHNICIAN",
      code: "ANZSCO CODE: 233311",
      link: "/cdr-sample/electrical-engineer-technician",
    },
    {
      image: "/images/Samples/telecommunicationsField.png",
      title: "TELECOMMUNICATIONS FIELD ENGINEER",
      code: "ANZSCO CODE: 313212",
      link: "/cdr-sample/telecommunications-field-engineer",
    },
  ];
  return (
    <Container>
      <Headings title="Get  Professional CDR Report Samples" />
      <Row>
        {list.map((l, index) => (
          <Col md={3} className="p-4 p-md-2" key={index}>
            <SampleCard
              title={l.title}
              image={l.image}
              code={l.code}
              link={l.link}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SampleList;
