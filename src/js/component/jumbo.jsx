import React from "react";

//include images into your bundle



const Jumbo = () => {

    const JumboText = {
        title : "Preacher's Daughter",
        description : "Out Now",
        buttonLabel : "Stream",
        buttonUrl : "https://open.spotify.com/intl-es/album/3WmujGwOS0ANHkJRnMH6n8?si=pP8SJg_GTKiAZXQ2c9GNeA"
    };
    return (
      <div className="jumbotron jumbo-title">
        <h1 className="display-4">{JumboText.title}</h1>
        <p className="lead">{JumboText.description}</p>
        <p>{JumboText.text}</p>
        <a className="btn btn-primary btn-lg" href={JumboText.buttonUrl} role="button">
          {JumboText.buttonLabel}
        </a>

      </div>
    );
  };

export default Jumbo;
