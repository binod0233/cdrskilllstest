import { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button, 
  Container,
  Col,
  Row,
} from "react-bootstrap";
import Link from 'next/link'
import {useRouter} from 'next/router'

const Header = ({ scrollToTop }) => {
  const router = useRouter()
  
  const [show, setShow] = useState();
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  
  useEffect(() => {
    scrollToTop();
  }, []);

  return ( 
    <div className="header">
      <Navbar  className="headernavbar px-5" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ marginLeft: "-80px" }}>
            <div className="headerImageContainer">
              <img src="/logo.png" className="img-fluid" alt="logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="CDR Services"
                id="basic-nav-dropdown"
                style={{ color: "white", margin: "0 2rem" }}
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                onClick={() => router.push("/services")}
              >
                <NavDropdown.Item
                  href="/services/cdr-writing-service-australia"
                  style={{
                    color: "white",
                    background: "#203546",
                  }}
                >
                  CDR Writing
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href=" /services/career-episode-writing-australia"
                  style={{ color: "white", background: "#203546" }}
                >
                  Career Episode Writing
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href="/services/summary-statement-writing-australia"
                  style={{ color: "white", background: "#203546" }}
                >
                  Summary Statement Writing
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href="/services/stage-1-competency-assessment-australia"
                  style={{ color: "white", background: "#203546" }}
                >
                  Stage 1 Competency Assessment
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/stage-2-competency-assessment-australia"
                  style={{ color: "white", background: "#203546" }}
                >
                  Stage 2 Competency Assessment
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/cdr-reviewing-australia"
                  style={{ color: "white", background: "#203546" }}
                >
                  CDR Reviewing
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/cpd-writing-australia"
                  style={{ color: "white", background: "#203546" }}
                >
                  CPD Writing
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href=" /services/plagiarism-checking-and-removal"
                  style={{ color: "white", background: "#203546" }}
                >
                  CDR Plagiarism Checking & Removal
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/professional-resume-writing-australia"
                  style={{ color: "white", background: "#203546" }}
                >
                  CV Resume Writing
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                href="/cdr-sample"
                style={{ color: "white", margin: "0 1.5rem" }}
              >
                CDR Samples
              </Nav.Link>

              <div
                href="/anzsco-codes"
                className="relative tooltip1"
                id="basic-nav-dropdown"
                style={{ color: "white", margin: "0 2rem" }}
                onClick={() => router.push("/anzsco-codes")}
              >
                ANZSCO Code
                <div
                  className="headerAnzsco"
                  style={{
                    width: "1000px",
                    height: "530px",
                    background: "#45657E",
                    borderRadius: "10px",
                    marginLeft: "-400px",
                    padding: "30px",
                    position: "absolute",
                    zIndex: "99",
                    visibility: "hidden",
                  }}
                >
                  <Row>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 1332</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-133211-engineering-manager"
                        >
                                      <a style={{color:"white",textDecoration:'none'}}>

                          Engineering Manager (ANZSCO 133211)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2331</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233111-chemical-engineer"
                        >
                                                                <a style={{color:"white",textDecoration:'none'}}>
                          Chemical Engineer (ANZSCO 233111)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233112-materials-engineer"
                        >
                                                                <a style={{color:"white",textDecoration:'none'}}>

                          Materials Engineer (ANZSCO 233112)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233211-civil-engineer"
                        >
                                                                <a style={{color:"white",textDecoration:'none'}}>

                          Civil Engineer (ANZSCO 233211)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233212-geo-technical-engineer"
                        >
                                                                <a style={{color:"white",textDecoration:'none'}}>
                          Geotechnical Engineer (ANZSCO 233212)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233214-structural-engineer"
                        >
                                                                                          <a style={{color:"white",textDecoration:'none'}}>
                          Structural Engineer (ANZSCO 233214)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233214-structural-engineer"
                        >
                                                                                          <a style={{color:"white",textDecoration:'none'}}>

                          Transport Engineer (ANZSCO 233215)
                          </a>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2333</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233311-electrical-engineer"
                        >
                           <a style={{color:"white",textDecoration:'none'}}>
                          Electrical Engineer (ANZSCO 233311)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2334</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233411-electronics-engineer"
                        >
                               <a style={{color:"white",textDecoration:'none'}}>
                          Electronics Engineer (ANZSCO 233411)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2335</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233511-industrial-engineer"
                        >
                          Industrial Engineer (ANZSCO 233511)
                        </a>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233512-mechanical-engineer"
                        >
                               <a style={{color:"white",textDecoration:'none'}}>
                          Mechanical Engineer (ANZSCO 233512)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233513-production-or-plant-engineer"
                        >
                               <a style={{color:"white",textDecoration:'none'}}>
                          Production or Plant Engineer (ANZSCO 233513)
                               </a>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2336</strong>
                      <br />
                      <div className="headerDropdownList">
                        <a
                        style={{color:"white",textDecoration:'none'}}
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233611-mining-engineer"
                        >
                          Mining Engineer (ANZSCO 233611)
                        </a>
                        <a style={{color:"white",textDecoration:'none'}}
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233612-petroleum-engineer"
                        >
                          Petroleum Engineer (ANZSCO 233612)
                        </a>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2339</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233911-aeronautical-engineer"
                        >
                                                  <a style={{color:"white",textDecoration:'none'}}>
                          Aeronautical Engineer (ANZSCO 233911)
                                                  </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233912-agricultural-engineer"
                        >
                                                  <a style={{color:"white",textDecoration:'none'}}>

                          Agricultural Engineer (ANZSCO 233912)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233916-naval-architect"
                        >
                                         <a style={{color:"white",textDecoration:'none'}}>
                          Naval Architect (ANZSCO 233916)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233913-biomedical-engineer"
                        >
                                         <a style={{color:"white",textDecoration:'none'}}>
                          Biomedical Engineer (ANZSCO 233913)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233914-engineering-technologist"
                        >
                                         <a style={{color:"white",textDecoration:'none'}}>
                          Engineering Technologist (ANZSCO 233914)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233915-environmental-engineer"
                        >
                             <a style={{color:"white",textDecoration:'none'}}>
                          Environmental Engineer (ANZSCO 233915)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233999-engineering-professionals-nec"
                        >
                               <a style={{color:"white",textDecoration:'none'}}>
                          Engineering Professionals (nec) (ANZSCO 233999)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 2631</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-263111-computer-networks-and-system-engineers"
                        >
     <a style={{color:"white",textDecoration:'none'}}>
                          Computer Network and Systems Engineer (ANZSCO 263111)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-263311-telecommunication-engineers"
                        >
                               <a style={{color:"white",textDecoration:'none'}}>
                          Telecommunications Engineer (ANZSCO 263311)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-313212-telecommunication-network-engineers"
                        >
                               <a style={{color:"white",textDecoration:'none'}}>
                          Telecommunications Network Engineer (ANZSCO 313212)
                          </a>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 3122</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-312211-civil-engineering-draftsperson"
                        >
                               <a style={{color:"white",textDecoration:'none'}}>
                          Civil Engineering Draftsperson (ANZSCO 312211)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-312212-civil-engineering-technician"
                        >
                               <a style={{color:"white",textDecoration:'none'}}>
                          Civil Engineering Technician (ANZSCO 312212)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 3123</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-312311-electrical-engineering-draftsperson"
                        >
                               <a style={{color:"white",textDecoration:'none'}}>
                          Electrical Engineering Draftsperson (ANZSCO 312311)
                          </a>
                        </Link>
                        
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-312312-electrical-engineering-technician"
                        >
                               <a style={{color:"white",textDecoration:'none'}}>
                          Electrical Engineering Technician (ANZSCO 312312)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col md={4} xs={6} className="headerDropdownRows">
                      <strong>Unit Group 3132</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-313212-telecommunication-field-engineer"
                        >
                               <a style={{color:"white",textDecoration:'none'}}>
                          Telecommunications Field Engineer (ANZSCO 312311)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-313212-telecommunication-technologist"
                        >
                               <a style={{color:"white",textDecoration:'none'}}>
                          Telecommunications Technologist(ANZSCO 313212)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-313213-telecommunications-network-planner"
                        >
                               <a style={{color:"white",textDecoration:'none'}}>
                          Telecommunications Network Planner(ANZSCO 313213)
                          </a>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <Nav.Link
                href="/pricing"
                style={{ color: "white", margin: "0 1.5rem" }}
              >
                Pricing
              </Nav.Link>

              <Nav.Link
                href="/faq"
                style={{ color: "white", margin: "0 1.5rem" }}
              >
                FAQ
              </Nav.Link>
              <Nav.Link
                href="/blogs"
                style={{ color: "white", margin: "0 1.5rem" }}
              >
                Blogs
              </Nav.Link>

              <Button
                className="px-4"
                style={{ background: "#017CC9" }}
                onClick={() => router.push(`/our-agents`)}
              >
                Meet Our Experts
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
