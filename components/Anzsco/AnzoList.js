import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchBox from "../SearchBox";
import AnzoCard from "./AnzoCard";

const AnzoList = () => {
  const anzos = [
    {
      image: "/images/Anzsco/engineering-manager.png",
      title: "ENGINEERING MANAGER",
      code: "ANZSCO CODE: 133211",
      link: "/anzsco-codes/anzsco-133211-engineering-manager",
    },
    {
      image: "/images/Anzsco/chemical-engineer.png",
      title: "CHEMICAL ENGINEER",
      code: "ANZSCO CODE: 233111",
      link: "/anzsco-codes/anzsco-233111-chemical-engineer",
    },
    {
      image: "/images/Anzsco/materials-engineer.png",
      title: "MATERIALS ENGINEER",
      code: "ANZSCO CODE: 233112",
      link: "/anzsco-codes/anzsco-233112-materials-engineer",
    },
    {
      image: "/images/Anzsco/civil-engineer.png",
      title: "CIVIL ENGINEER",
      code: "ANZSCO CODE: 233211",
      link: "/anzsco-codes/anzsco-233211-civil-engineer",
    },
    {
      image: "/images/Anzsco/geotechnical-engineer.png",
      title: "GEOTECHNICAL ENGINEER",
      code: "ANZSCO CODE: 233212",
      link: "/anzsco-codes/anzsco-233212-geo-technical-engineer",
    },
    {
      image: "/images/Anzsco/structural-engineer.png",
      title: "STRUCTURAL ENGINEER",
      code: "ANZSCO CODE: 233214",
      link: "/anzsco-codes/anzsco-233214-structural-engineer",
    },
    {
      image: "/images/Anzsco/transport-engineer.png",
      title: "TRANSPORT  ENGINEER",
      code: "ANZSCO CODE: 233215",
      link: "/anzsco-codes/anzsco-233215-transport-engineer",
    },
    {
      image: "/images/Anzsco/electrical-engineer.png",
      title: "ELECTRICAL ENGINEER",
      code: "ANZSCO CODE: 233311",
      link: "/anzsco-codes/anzsco-233311-electrical-engineer",
    },
    {
      image: "/images/Anzsco/electronics-engineer.png",
      title: "ELECTRONICS ENGINEER",
      code: "ANZSCO CODE: 233411",
      link: "/anzsco-codes/anzsco-233411-electronics-engineer",
    },
    {
      image: "/images/Anzsco/industrial-engineer.png",
      title: "INDUSTRIAL ENGINEER",
      code: "ANZSCO CODE: 233511",
      link: "/anzsco-codes/anzsco-233511-industrial-engineer",
    },
    {
      image: "/images/Anzsco/production-engineer.png",
      title: "PRODUCTION OR PLANT ENGINEER",
      code: "ANZSCO CODE: 233513",
      link: "/anzsco-codes/anzsco-233513-production-or-plant-engineer",
    },
    {
      image: "/images/Anzsco/mining-engineer.png",
      title: "MINING ENGINEER",
      code: "ANZSCO CODE: 233611",
      link: "/anzsco-codes/anzsco-233611-mining-engineer",
    },
    {
      image: "/images/Anzsco/mechanical-engineer.png",
      title: "MECHANICAL ENGINEER",
      code: "ANZSCO CODE: 233512",
      link: "/anzsco-codes/anzsco-233512-mechanical-engineer",
    },
    {
      image: "/images/Anzsco/petroleum-engineer.png",
      title: "PETROLEUM ENGINEER",
      code: "ANZSCO CODE: 233612",
      link: "/anzsco-codes/anzsco-233612-petroleum-engineer",
    },
    {
      image: "/images/Anzsco/aeronautical-engineer.png",
      title: "AERONAUTICAL ENGINEER",
      code: "ANZSCO CODE: 233911",
      link: "/anzsco-codes/anzsco-233911-aeronautical-engineer",
    },
    {
      image: "/images/Anzsco/biomedical-engineer.png",
      title: "BIOMEDICAL ENGINEER",
      code: "ANZSCO CODE: 233913",
      link: "/anzsco-codes/anzsco-233913-biomedical-engineer",
    },
    {
      image: "/images/Anzsco/engineering-technologist.png",
      title: "ENGINEERING TECHNOLOGIST",
      code: "ANZSCO CODE: 233914",
      link: "/anzsco-codes/anzsco-233914-engineering-technologist",
    },
    {
      image: "/images/Anzsco/environmental-engineer.png",
      title: "ENVIRONMENTAL ENGINEER",
      code: "ANZSCO CODE: 233915",
      link: "/anzsco-codes/anzsco-233915-environmental-engineer",
    },
    {
      image: "/images/Anzsco/engineering-professional.png",
      title: "ENGINEERING PROFESSIONALS",
      code: "ANZSCO CODE: 233999",
      link: "/anzsco-codes/anzsco-233999-engineering-professionals-nec",
    },
    {
      image: "/images/Anzsco/computer-network.png",
      title: "COMPUTER NETWORK AND SYSTEMS ENGINEER",
      code: "ANZSCO CODE: 263111",
      link: "/anzsco-codes/anzsco-263111-computer-networks-and-system-engineers",
    },
    {
      image: "/images/Anzsco/telecommunication-network-engineer.png",
      title: "TELECOMMUNICATIONS NETWORK ENGINEER",
      code: "ANZSCO CODE: 263312",
      link: "/anzsco-codes/anzsco-263312-network-telecommunication-engineers",
    },
    {
      image: "/images/Anzsco/telecommunications-engineer.png",
      title: "TELECOMMUNICATIONS ENGINEER",
      code: "ANZSCO CODE: 263311",
      link: "/anzsco-codes/anzsco-263311-telecommunication-engineers",
    },
    {
      image: "/images/Anzsco/civil-technician.png",
      title: "CIVIL ENGINEERING TECHNICIAN",
      code: "ANZSCO CODE: 233511",
      link: "/anzsco-codes/anzsco-312212-civil-engineering-technician",
    },
    {
      image: "/images/Anzsco/civil-draftsperson.png",
      title: "CIVIL ENGINEERING DRAFTSPERSON",
      code: "ANZSCO CODE: 233511",
      link: "/anzsco-codes/anzsco-312211-civil-engineering-draftsperson",
    },
    {
      image: "/images/Anzsco/electrical-draftsperson.png",
      title: "ELECTRICAL ENGINEERING DRAFTSPERSON",
      code: "ANZSCO CODE: 312311",
      link: "/anzsco-codes/anzsco-312311-electrical-engineering-draftsperson",
    },
    {
      image: "/images/Anzsco/telecommunications-engineer.png",
      title: "TELECOMMUNICATIONS FIELD ENGINEER",
      code: "ANZSCO CODE: 313212",
      link: "/anzsco-codes/anzsco-313212-telecommunication-field-engineer",
    },


    {
      image: "/images/Anzsco/naval-technician.png",
      title: "NAVAL ARCHITECT",
      code: "ANZSCO CODE: 233916",
      link: "/anzsco-codes/anzsco-233916-naval-architect",
    },
    {
      image: "/images/Anzsco/electronics-draftsperson.png",
      title: "ELECTRONICS ENGINEERING DRAFTSPERSON",
      code: "ANZSCO CODE: 312411",
      link: "/anzsco-codes/anzsco-312411-electronics-draftsperson",
    },
    {
      image: "/images/Anzsco/telecommunications-network-planner.png",
      title: "TELECOMMUNICATIONS NETWORK PLANNER",
      code: "ANZSCO CODE: 313213",
      link: "/anzsco-codes/anzsco-313213-telecommunications-network-planner",
    },
    {
      image: "/images/Anzsco/telecommunications-technologist.png",
      title: "TELECOMMUNICATIONS TECHNOLOGIST",
      code: "ANZSCO CODE: 313214",
      link: "/anzsco-codes/anzsco-313212-telecommunication-technologist",
    },
    {
      image: "/images/Anzsco/engineering-technician.png",
      title: "ENGINEERING TECHNICIAN",
      code: "ANZSCO CODE: 312999",
      link: "/anzsco-codes/anzsco-312999-engineering-technician",
    },
  ];

  
  const [anzoList, setAnzoList] = React.useState(anzos);
  const searchAnzo = (keyword) => {
    console.log(keyword)
    let tempAnzo = anzos.filter((s) => s.title.includes(keyword));
    setAnzoList(tempAnzo);
  };
  return (
    <Container>
      <SearchBox 
        searchAnzo={searchAnzo}
        place="Search by Engineering Professions"
      />
      <Row>
        {anzoList.map((l, index) => (
          <Col md={4} xs={6} className="px-md-5 px-2" key={index}>
            <AnzoCard
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

export default AnzoList;
