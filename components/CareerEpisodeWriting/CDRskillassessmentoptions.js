import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Headings from '../Headings'
import Paragraphs from '../Paragraphs'

const CDRskillassessmentoptions = () => {
const list=[`Each Career Episode report writing must be written in Australian English in your own words. However, knowing English, 
or even Australian English, is insufficient. Career Episodes report writing should always be in the first person and the 
active voice. In general, you should begin your statements with the word 'I.' For example, 'I created,' 'I researched,' 'I 
examined,' and so on.

`,`Every incident of your career episode report writing must clearly illustrate the application of engineering knowledge and 
abilities in the selected occupation, stating what you did and describing how you did it, stressing your participation in the 
incident.

`,`Career episodes report must be written in essay format, but the technical portions should be narrative rather than giving 
the mathematical calculations and the engineering design/fabrication process.

`,`It is critical to number each paragraph in each of your Career Episode reports to provide a reference in the Summary 
Statement Writing. The preferred format is as follows:
o	Career episode report 1 (paragraphs 1.1, 1.2, 1.3, and so on.)
o	Career episode report 2 (paragraphs 2.1, 2.2, 2.3, and so on.)
o	Career episode report 3 (paragraphs 3.1, 3.2, 3.3, and so on.)
  `] 
  return (

    <div style={{backgroundColor:"#E5E5E5"}} className="pt-3">
      <Container>
         <Headings title="CDRskillassessment provides Career Episode Writing Service, taking into 
account the following options:"/>

      {list.map((l,i)=>(
        <Row key={i}>
          <Col xs={1} className='pt-4'>
              <img style={{height:"30px" ,width:"30px", float:"right"}} src="/images/CareerEpisodeWriting/hat.png" alt="hat"/> 
          </Col>
          <Col xs={11}>
             <Paragraphs data={l}/>
          </Col>
          </Row>
      ))}
      </Container>
    </div>
  )
}

export default CDRskillassessmentoptions