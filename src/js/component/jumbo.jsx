import React from "react";

//include images into your bundle



const Jumbo = () => {

    const JumboText = {
        title : "Bienvenido a Travel Explorer",
        description : "Tu puerta de entrada a las mejores experiencias de viaje alrededor del mundo.",
        text : "Descubre nuevos destinos, aventuras y ofertas especiales con nosotros.",
        buttonLabel : "Comienza tu aventura"
    };
    return (
      <div className="jumbotron">
        <h1 className="display-4">{JumboText.title}</h1>
        <p className="lead">{JumboText.description}</p>
        <hr className="my-4" />
        <p>{JumboText.text}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          {JumboText.buttonLabel}
        </a>
      </div>
    );
  };

export default Jumbo;
