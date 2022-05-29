import React,{useState} from "react";
import { Container, Table } from "react-bootstrap";
import Headings from "../Headings";

const Tables = () => {
  const [showTable1Data,setShowTable1Data] = useState(false)
  const [showTable2Data,setShowTable2Data] = useState(false)
  const [showTable3Data,setShowTable3Data] = useState(false)

  return (
    <div>
      <Container className="mt-4">
        <Headings title="CDR Summary Statement writing format for Professional Engineers in Australia" />
        <Table bordered hover className="ourCDRServicesParagraph">
          <thead>
            <tr
              style={{
                backgroundColor: "#203546",
                color: "#FFF",
                padding: "10px",
              }}
              className="p-5"
            >
              <th>#</th>
              <th>Competency Element</th>
              <th>A brief summary of how you have applied for the element</th>
              <th>
                Paragraph number in the career episodes(s) where the element is
                addressed
              </th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={()=>setShowTable1Data(!showTable1Data)}>
              <td>1</td>
              <td>PE1 KNOWLEDGE AND SKILL BASE</td>
              <td></td>
              <td></td>
            </tr>
            {showTable1Data && 
            <>
            <tr >
              <td></td>
              <td>PE1.1 Theory-based, Comprehensive understanding of the underpinning natural and physical sciences and the engineering fundamentals applicable to the engineering discipline</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE1.2 Conceptual understanding of numerical analysis, mathematics, statistics, and computer and information sciences under pin the engineering discipline.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE1.3 In-depth understanding of specialist bodies of knowledge within the engineering discipline.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE1.4 Discernment of knowledge development and research directions within the engineering discipline.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE1.5 Knowledge of contextual factors impacting the engineering discipline.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE1.6 Understanding the scope, principles, norms, accountabilities, and bounds of contemporary engineering practice in the specific discipline.</td>
              <td></td>
              <td></td>
            </tr>
            </>}
            <tr onClick={()=>setShowTable2Data(!showTable2Data)}>
              <td>2</td>
              <td>PE2 ENGINEERING APPLICATION ABILITY</td>
              <td></td>
              <td></td>
            </tr>
            {showTable2Data && <>
              <tr >
              <td></td>
              <td>PE2.1 Application of established engineering methods to complex engineering problem-solving.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE2.2 Fluent application of engineering techniques, tools, and resources.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE2.3 Application of systematic engineering synthesis and design processes</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE2.4 Application of systematic approaches to the conduct and management of engineering projects.</td>
              <td></td>
              <td></td>
            </tr>
            </>}
            <tr onClick={()=>setShowTable3Data(!showTable3Data)}>
              <td>3</td>
              <td>PE3 PROFESSIONAL AND PERSONAL ATTRIBUTES</td>
              <td></td>
              <td></td>
            </tr>
            {showTable3Data && <>
              <tr >
              <td></td>
              <td>PE3.1 Ethical conduct and professional accountability.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE3.2 Effective oral and written communication in professional and lay domains.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE3.4 Professional use and management of information.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE3.5 Orderly management of self and professional conduct.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE3.6 Effective team leadership and team membership</td>
              <td></td>
              <td></td>
            </tr>
           
            </>}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Tables;
