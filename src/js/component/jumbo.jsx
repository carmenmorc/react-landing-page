import React from "react";

//include images into your bundle



const Jumbo = () => {

    const JumboText = {
        title : "God loves you, but not enough to save you",
        description : "Preacher's Daughter",
        buttonLabel : "Out Now",
        buttonUrl : "https://open.spotify.com/intl-es/album/3WmujGwOS0ANHkJRnMH6n8?si=pP8SJg_GTKiAZXQ2c9GNeA"
    };
    return (
      <div className="jumbotron jumbo-title">
        <div className="jumbo-text">
        <h1 className="display-4">{JumboText.title}</h1>
        <h2 className="lead">{JumboText.description}</h2>
        <p>{JumboText.text}</p>
        <a className="btn btn-primary btn-lg jumbo-btn" href={JumboText.buttonUrl} role="button">
          {JumboText.buttonLabel}
        </a>
        </div>

      </div>
    );
  };

export default Jumbo;
