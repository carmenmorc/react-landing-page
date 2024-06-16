import React from "react";

const About = () => {
    const AboutText = {
        imagen: "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
        title: "About",
        content: "aksdhaksdhkasjda",
        buttonLabel: "alkjsdlasd",
        buttonUrl: "alsjdlkasdj"
    };

    return (
        <div className="card">
            <img src={AboutText.imagen} className="card-img-top" alt="Placeholder Image" />
            <div className="card-body">
                <h5 className="card-title">{AboutText.title}</h5>
                <p className="card-text">{AboutText.content}</p>
                <a href={AboutText.buttonUrl} className="btn btn-primary">{AboutText.buttonLabel}</a>
            </div>
        </div>
    );
};

export default About;