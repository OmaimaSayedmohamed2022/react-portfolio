import React from "react"
import "./App.css"
import 'react-multi-carousel/lib/styles.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Components/Header.js";
import Home from "./Components/Home";
import Skills from "./Components/Skills.js";
import Projects from "./Components/Projects";
// import Forms from "./Components/Forms"
import Content from "./Components/Content"
import Footer from "./Components/Footer"

const App=()=> {
return(
<div className="bg">
<Router>
<Header />
<Routes>
<Route path="/" element={<Home/>}/>
 <Route path="/home" element={<Home/>}/>
 <Route path="/skills" element={<Skills/>}/>
 <Route path="/projects" element={<Projects/>}>
 {/* <Route path="forms" element={<Forms/>}/> */}
 <Route path="content" element={<Content/>}/>
 <Route path="*" element={<h2>Page not found</h2>}/>
 </Route>
 <Route path="/footer" element={<Footer/>}/>
</Routes>
</Router>
</div>

)

}

export default App;

