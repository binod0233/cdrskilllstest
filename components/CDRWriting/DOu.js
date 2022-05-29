import React from 'react'
import { Container } from 'react-bootstrap'
import Headings from '../Headings'
import Paragraphs from '../Paragraphs'

const DOu = () => {
  return (
    <div style={{background:"#E5E5E5"}}>
      <Container className='pt-5'>
        <Headings title="Do You Need One?"/>
        <Paragraphs data="Engineers Australia requires a technical report from applicants who want to pursue a profession in engineering in Australia. 
Engineers are using CDR reports in Australia to assess the competency and education level of international engineering students 
and professionals who wish to work in the country. The primary purpose of the CDR is to demonstrate your professional abilities 
and knowledge as an engineering associate, professional engineer, or engineering technologist."/>
<Paragraphs data="For permanent engineer migration to Australia, a CDR report is one of the most important documents. Australia provides an 
excellent environment for engineers to work. Before applying for a skilled immigration visa in Australia, 
you must get your CDR report approved by Engineers Australia. You can write this reportindependently or with the assistance of 
engineers. Engineers Australia states that CDR reports must follow their requirements and be free of mistakes. The procedure of 
CDR Plagiarism Checking is included in the report called proofreading."/>
<Paragraphs data="Applicants are to submit technical engineering applications
and demonstrate their skills and knowledge in the chosen vocation. Your report will be evaluated using the ANZSCO society and 
graduate competency standards. 
"/>
      </Container>
    </div>
  )
}

export default DOu