import React from "react";

const About = () => {
    const AboutText = {
        imagen: "https://vmagazine.com/wp-content/uploads/2022/06/EC-by-Silken-Weinberg-scaled.jpg",
        title: "About",
        content: "Preacher's Daughter is the debut studio album by American singer-songwriter Ethel Cain, released in 2022. The album explores themes of identity, trauma, and the American South through a deeply personal and haunting narrative. Ethel Cain, whose real name is Hayden Anhedönia, crafts a cinematic and emotional journey, blending elements of dream pop, gothic rock, and folk. The album tells the story of a young woman grappling with her past, religion, and familial ties, set against the backdrop of rural America. With its evocative lyrics and atmospheric production, Preacher's Daughter has received critical acclaim for its raw honesty and powerful storytelling.",
        buttonLabel: "Learn More",
        buttonUrl: "https://genius.com/albums/Ethel-cain/Preachers-daughter"
    };

    return (
        <div className="d-flex align-items-center about">
            <div className="flex-grow-1 about-text">
                <h1>{AboutText.title}</h1>
                <p>{AboutText.content}</p>
                <a href={AboutText.buttonUrl} className="btn btn-primary about-btn">{AboutText.buttonLabel}</a>
            </div>
            <img src={AboutText.imagen} alt="Ethel Cain walking on a field" className="about-img" />
        </div>
    );
};

export default About;