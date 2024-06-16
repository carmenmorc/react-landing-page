import React from "react";

//include images into your bundle

const Carousel = () => {

    const song1 = {
        image : "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
        title : "Family Tree (Intro)",
        lyric :"He'll laugh and say, 'You know I raised you bеtter than this'. Then leavе me hanging so they all can laugh at me"
    }

    const song2 = {
        image : "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
        title : "American Teenager",
        lyric :"Say what you want, but say it like you mean it. With your fist for once, a long cold war"
    }

    const song3 = {
        image : "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
        title : "A House in Nebraska",
        lyric :"But it's worse to know, that I'm the reason, you won't come home"
    }

    const song4 = {
        image : "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
        title : "Western Nights",
        lyric :"Trouble's always gonna find you baby, but so will I"
    }

    const song5 = {
        image : "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
        title : "Family Tree",
        lyric :"These crosses all over my body, remind me of who I used to be"
    }

    const song6 = {
        image : "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
        title : "Hard Times",
        lyric :"I am poison in the water and unhappy, little girl who needs her daddy real bad"
    }

    const song7 = {
        image : "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
        title : "Thoroughfare",
        lyric :"And once we reached the coast, you said, 'End of the line'. We finally reached the edge after all this time - I didn't find my love, but I still made it this far without it"
    }

    const song8 = {
        image : "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
        title : "Gibson Girl",
        lyric :"He's cold-blooded so it takes more time to bleed. Obsession with the money, addicted to the drugs, says he's in love with my body, that's why he's fucking it up"
    }

    const song9 = {
        image : "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
        title : "Ptolemaea",
        lyric :"I am the face of love's rage"
    }

    const song10 = {
        image : "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
        title : "August Underground",
        lyric :"🎵"
    }

    const song11 = {
        image : "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
        title : "Televangelism",
        lyric :"🎵"
    }

    const song12 = {
        image : "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
        title : "Sun Bleached Flies",
        lyric :"I can't let go when something's broken, it's all I know and it's all I want now"
    }

    const song13 = {
        image : "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
        title : "Strangers",
        lyric :"Am I making you feel sick?"
    }


    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-flex justify-content-around">
                        <div className="card carousel-component">
                            <img src={song1.image} className="card-img-top" alt="Slide 1" />
                            <div className="card-body">
                                <h1>{song1.title}</h1>
                                <p className="card-text">{song1.lyric}</p>
                            </div>
                        </div>

                        <div className="card carousel-component">
                            <img src={song2.image} className="card-img-top" alt="Slide 1" />
                            <div className="card-body">
                                <h1>{song2.title}</h1>
                                <p className="card-text">{song2.lyric}</p>
                            </div>
                        </div>

                        <div className="card carousel-component">
                            <img src={song3.image} className="card-img-top" alt="Slide 1" />
                            <div className="card-body">
                                <h1>{song3.title}</h1>
                                <p className="card-text">{song3.lyric}</p>
                            </div>
                        </div>

                        <div className="card carousel-component">
                            <img src={song4.image} className="card-img-top" alt="Slide 1" />
                            <div className="card-body">
                                <h1>{song4.title}</h1>
                                <p className="card-text">{song4.lyric}</p>
                            </div>
                        </div>

                        <div className="card carousel-component">
                            <img src={song5.image} className="card-img-top" alt="Slide 1" />
                            <div className="card-body">
                                <h1>{song5.title}</h1>
                                <p className="card-text">{song5.lyric}</p>
                            </div>
                        </div>

                        <div className="card carousel-component">
                            <img src={song6.image} className="card-img-top" alt="Slide 1" />
                            <div className="card-body">
                                <h1>{song6.title}</h1>
                                <p className="card-text">{song6.lyric}</p>
                            </div>
                        </div>

                        <div className="card carousel-component">
                            <img src={song7.image} className="card-img-top" alt="Slide 1" />
                            <div className="card-body">
                                <h1>{song7.title}</h1>
                                <p className="card-text">{song7.lyric}</p>
                            </div>
                        </div>

                        <div className="card carousel-component">
                            <img src={song8.image} className="card-img-top" alt="Slide 1" />
                            <div className="card-body">
                                <h1>{song8.title}</h1>
                                <p className="card-text">{song8.lyric}</p>
                            </div>
                        </div>

                        <div className="card carousel-component">
                            <img src={song9.image} className="card-img-top" alt="Slide 1" />
                            <div className="card-body">
                                <h1>{song9.title}</h1>
                                <p className="card-text">{song9.lyric}</p>
                            </div>
                        </div>

                        <div className="card carousel-component">
                            <img src={song10.image} className="card-img-top" alt="Slide 1" />
                            <div className="card-body">
                                <h1>{song10.title}</h1>
                                <p className="card-text">{song10.lyric}</p>
                            </div>
                        </div>

                        <div className="card carousel-component">
                            <img src={song11.image} className="card-img-top" alt="Slide 1" />
                            <div className="card-body">
                                <h1>{song11.title}</h1>
                                <p className="card-text">{song11.lyric}</p>
                            </div>
                        </div>

                        <div className="card carousel-component">
                            <img src={song12.image} className="card-img-top" alt="Slide 1" />
                            <div className="card-body">
                                <h1>{song12.title}</h1>
                                <p className="card-text">{song12.lyric}</p>
                            </div>
                        </div>

                        <div className="card carousel-component">
                            <img src={song13.image} className="card-img-top" alt="Slide 1" />
                            <div className="card-body">
                                <h1>{song13.title}</h1>
                                <p className="card-text">{song13.lyric}</p>
                            </div>
                        </div>
                        


                    </div>
                </div>
        

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};


export default Carousel;