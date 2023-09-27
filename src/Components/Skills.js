import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import img1 from "../images/meter1.svg"
import img2 from "../images/meter2.svg"
import img3 from "../images/meter3.svg"
import img5 from "../images/meter2.svg"
import Projects from "./Projects";

 function Skills(){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1

        }
      };
     
        return ( 
          <>
   <div className="skill">
    <h2 className="title">skills</h2>
    <p className="title">These are my skills ,you can see it</p>
    <Carousel
          className="cars"
          responsive={responsive}
          swipeable={false}
          draggable={true}
          ssr={true}
          infinite={true}
          keyBoardControl={true}
          transitionDuration={1000}
          autoPlaySpeed={1000}
          dotListClass="custom-dot-list-style" 
        >  
  <div className="card1"> 
  <img src={img1} alt="img4"/>
  <h5 className="title2">HTML</h5>
  </div>
  <div className="card1"> 
  <img src={img3} alt="img4"/>
  <h5 className="title2">CSS</h5>
  </div>
  <div className="card1"> 
  <img src={img3} alt="img4"/>
  <h5 className="title2">bootstrap</h5>
  </div>
  <div className="card1"> 
  <img src={img2} alt="img4"/>
  <h5 className="title2">React.js</h5>
  </div>
  <div className="card1"> 
  <img src={img5} alt="img4"/>
  <h5 className="title2">Node.js</h5>
  </div>
</Carousel>
 </div>
 <Projects/>
</>
 )
   
}

export default Skills


