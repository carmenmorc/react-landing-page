//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";


const Card1Text = {
    title : "Destinos Exóticos",
    description : "Explora los destinos más exóticos y únicos alrededor del mundo con nuestras ofertas exclusivas.",
    buttonLabel : "Ver Más",
    imageUrl : "https://images.unsplash.com/photo-1585598117791-876ce25c1884?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};
const Card2Text = {
    title : "Aventuras Inolvidables",
    description : "Descubre aventuras inolvidables y actividades emocionantes en todos nuestros destinos.",
    buttonLabel : "Ver Más",
    imageUrl : "https://images.unsplash.com/photo-1585598117791-876ce25c1884?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};
const Card3Text = {
    title : "Cruceros de Lujo",
    description : "Relájate en nuestros cruceros de lujo y disfruta de un servicio y comodidades de primera clase.",
    buttonLabel : "Ver Más",
    imageUrl : "https://images.unsplash.com/photo-1585598117791-876ce25c1884?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};
const Card4Text = {
    title : "Ofertas Especiales",
    description : "Aprovecha nuestras ofertas especiales y descuentos para tus próximas vacaciones.",
    buttonLabel : "Ver Más",
    imageUrl : "https://images.unsplash.com/photo-1585598117791-876ce25c1884?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};


//import your own components
import Navbar from "./component/navbar.jsx";
import Jumbo from "./component/jumbo.jsx";
import Cards from "./component/cards.jsx";
import About from "./component/cards.jsx";


//render your react application
ReactDOM.render(<div>
    <Navbar />
    <Jumbo />
    <About />



    <div className="card-container">
    <Cards 
    title={Card1Text.title}
    description={Card1Text.description}
    buttonLabel={Card1Text.buttonLabel}
    imageUrl={Card1Text.imageUrl}/>
    <Cards 
    title={Card2Text.title}
    description={Card2Text.description}
    buttonLabel={Card2Text.buttonLabel}
    imageUrl={Card2Text.imageUrl}/>
    <Cards 
    title={Card3Text.title}
    description={Card3Text.description}
    buttonLabel={Card3Text.buttonLabel}
    imageUrl={Card3Text.imageUrl}/>
    <Cards 
    title={Card4Text.title}
    description={Card4Text.description}
    buttonLabel={Card4Text.buttonLabel}
    imageUrl={Card4Text.imageUrl}/>
    </div>
    

  </div>,document.querySelector("#app"));
