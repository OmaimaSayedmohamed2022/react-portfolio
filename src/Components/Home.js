import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import svg from "../images/header-img.svg"
import Skills from "./Skills";
import { FaArrowAltCircleRight } from 'react-icons/fa';
const Home=()=>{
return(
  <>
    <div className="container" >
   <div className="box"> <h5>Walcome To My Portfolio</h5></div>
   <h2 class="title1">Hi! i'm Omaima <br></br> Sayed</h2>
   <div className="typing" > <h2 class="title">Mohamed,</h2>
<TypeWriterEffect 
        textStyle={{
          color: "#ffffff",
          fontWeight: 645,
          fontSize: '2em',
        }}
        startDelay={0}
        cursorColor="#000000"
        multiText={[
          'FrontEnd Developer',
          'BackEnd Developer',
          'FullStack Developer',
        ]}
        multiTextDelay={1000}
        typeSpeed={100}
        multiTextLoop
      />
 </div> 
  <h6 class="title1">Hello EveryOne,I have 1year of Experience in Web Developent </h6>
<img src={svg} className="svg" alt="svg"/>
<FaArrowAltCircleRight className="arrow"/>
</div>
  
  <Skills/>
     </>
   
)

}
export default Home;