import React from 'react'
import { Container } from 'react-bootstrap'
import Headings from '../Headings'
import Paragraphs from '../Paragraphs'

const Part1 = () => {
  return (
    <div>
      <Container>
        <Headings title="Summary Statement is a key part of CDR for Engineers Australia"  />
        <Paragraphs data="The summary statement is a tabular representation of all three career episodes' competency elements and appropriate mapping 
of their skills from each career episode. A summary statement is a required piece of paperwork that must be presented to Engineers 
Australia along with CDR for assessing the competency of an engineer migrating and residing in Australia. 
Summary statement writing 
should quickly reference specific competency aspects, with career episode paragraphs numbered. The goal of a summary statement 
in writing CDR for Engineers Australia is to demonstrate how you applied your technical skills and professional and personal attributes. 
While writing a summary statement, we always include all your abilities and knowledge and connect them to the appropriate paragraphs 
in the Career Episodes. 
It is up to you to decide which agency will deliver you a better service.
"/>
      </Container>
    </div>
  )
}

export default Part1