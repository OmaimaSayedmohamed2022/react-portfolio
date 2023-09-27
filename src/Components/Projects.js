import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Container } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imge1 from "../images/Annotation 2023-09-26 002201.png"
import imge2 from "../images/Annotation 2023-09-27 002454.png"
import imge3 from "../images/proj2.png"
import imge4 from "../images/Annotation 2023-09-27 015304.png"
// import Forms from "./Forms";
import { Link,Outlet } from "react-router-dom";
import Footer from "./Footer";

const Projects=()=>{
return ( 
<div>
<div className="box1">
    <div className="title">
<h2 class="title"> my project </h2>
<p>my name is omaima sayed ,i live in cario ,this is my project in react.js </p>
</div>
<nav className="link">
  <ButtonGroup className="btns">
     <Button className="btn btn-light m-1"><Link to="/projects" class="btnt"> 1st Section </Link></Button>
     <Button className="btn btn-light"><Link to="forms" class="btnt"> 2nd Section </Link> </Button>
     <Button className="btn btn-light"><Link to="content"class="btnt"> 3rd Section </Link> </Button>
      </ButtonGroup>
      </nav>
      <Outlet/>
      <Container>
      <Row>
      <Col xs={12} md={6}>
      <div className="im_contain">
  <img src={imge1} alt="" className="imge" />
  <div class="overlay">
  <h3>frontend project(html , css)</h3> 
  <p className="p1">Desgin @ Development</p>
  </div>
  </div></Col>
      <Col xs={12} md={6}>
      <div className="im_contain">
  <img src={imge2} alt="" className="imge" />
  <div class="overlay">
  <h3>Online Furniture Store</h3> 
  <p className="p1">Desgin @ Development</p>
  </div>
  </div></Col>
  </Row>
  <Row>
  <Col xs={12} md={6}>
      <div className="im_contain">
  <img src={imge4} alt="" className="imge" />
  <div class="overlay">
  <h3>Personal Portfolio Website</h3> 
   <p className="p1">Desgin @ Development</p>
  </div>
  </div></Col>
  <Col xs={12} md={6}>
      <div className="im_contain">
  <img src={imge3} alt="" className="imge" />
  <div class="overlay">
  <h3>Learning Website</h3> 
  <p className="p1">Desgin @ Development</p>
  </div>
  </div></Col>
  </Row> 
      </Container>
      </div>
 <div/>
 {/* <Forms/> */}
 <Footer/>
</div>
)
    
}
export default Projects;