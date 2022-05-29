import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const TEstimonials = () => {
  const datatList=[{title:"Jessica Gates",country:"England",image:"images/Testimonials/jessica.png",data:`Very impressed with their work. Detailed 
  writing without missing a thing. Very happy 
  with the customer care team. Will use your 
  service again.` ,alt:"testimonials"},{title:"Jessica Gates",country:"England",image:"images/Testimonials/jessica.png",data:`Very impressed with their work. Detailed 
  writing without missing a thing. Very happy 
  with the customer care team. Will use your 
  service again.` ,alt:"testimonials"},{title:"Jessica Gates",country:"England",image:"images/Testimonials/jessica.png",data:`Very impressed with their work. Detailed 
  writing without missing a thing. Very happy 
  with the customer care team. Will use your 
  service again.` ,alt:"testimonials"},{title:"Jessica Gates",country:"England",image:"images/Testimonials/jessica.png",data:`Very impressed with their work. Detailed 
  writing without missing a thing. Very happy 
  with the customer care team. Will use your 
  service again.` ,alt:"testimonials"},{title:"Jessica Gates",country:"England",image:"images/Testimonials/jessica.png",data:`Very impressed with their work. Detailed 
  writing without missing a thing. Very happy 
  with the customer care team. Will use your 
  service again.` ,alt:"testimonials"},{title:"Jessica Gates",country:"England",image:"images/Testimonials/jessica.png",data:`Very impressed with their work. Detailed 
  writing without missing a thing. Very happy 
  with the customer care team. Will use your 
  service again.` ,alt:"testimonials"}]
  return (
    <div>
      <Container className="p-5 ">
      <h1 style={{color:"#203546",fontFamily:"Century Gothic",fontWeight:"700",textAlign:"center"}}>
        Testimonials
      </h1>
      <p style={{color:"#666",fontFamily:"Asap", fontWeight:"400",textAlign:"center",paddingTop:"20px"}} className="pb-5"> Hundreds of our clients got positive skill assessments with the professional help of our experts. Now, its your turn to get a skilled migration visa.
 </p>

 <Row className="pt-5 mt-5" >
  {datatList.map((d,i) =>

<Col key={i} md={6} className="my-5" >
<div style={{boxShadow:"4px 4px 4px 6px rgba(0,0,0,0.25)",borderRadius:"50px",backgroundColor:"#F2F2F2"}}> 
   
  
<Row className="p-1"  >

<Col md={7} className="px-1" style={{marginTop:"-100px"}} >
  <div style={{backgroundColor:"#203546",borderRadius:"20px" ,color:"#F8F9FC",fontFamily:"Asap",fontWeight:"700",textAlign:"center"}} className="p-3 mt-5">
      {d.title}<br/>
      {d.country}
  </div>
  
  </Col>
  <Col md={5} style={{float:"right",marginTop:"-100px"}} className="px-1" >
      <img src={d.image} alt={d.alt} />
  </Col>
 

  </Row>
  <Row className="p-1 pe-5">
  <div className=" ms-5 mb-3 ps-5 me-3" style={{borderLeft:"5px solid #370C64"}}>⭐⭐⭐⭐⭐
       <p style={{fontFamily:"Asap",fontWeight:"500"}} className="py-4 pe-5">{d.data}</p>
</div>
</Row>

     

  </div>
</Col>
    
    )}

  

 </Row>
</Container>
    </div>
  )
}

export default TEstimonials