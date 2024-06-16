//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";



//import your own components
import Navbar from "./component/navbar.jsx";
import Jumbo from "./component/jumbo.jsx";
import About from "./component/about.jsx";
import Carousel from "./component/carousel.jsx";


//render your react application
ReactDOM.render(<div>
    <Navbar />
    <Jumbo />
    <About />
    <Carousel />

  </div>,document.querySelector("#app"));
