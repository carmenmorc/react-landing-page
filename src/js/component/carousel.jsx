import React from 'react';

const Carousel = () => {

    const songs = [
        {
            image: "https://www.rocktotal.com/wp-content/uploads/2022/04/ethel-cain.jpg",
            title: "Family Tree (Intro)",
            lyric: "He'll laugh and say, 'You know I raised you better than this'. Then leave me hanging so they all can laugh at me"
        },
        {
            image: "https://i.pinimg.com/564x/8e/39/6d/8e396d6a70af8f883aeed8f71eb4295a.jpg",
            title: "American Teenager",
            lyric: "Say what you want, but say it like you mean it. With your fist for once, a long cold war"
        },
        {
            image: "https://i.pinimg.com/564x/62/8a/22/628a226421b5fc61eb01ca6ae67a9f25.jpg",
            title: "A House in Nebraska",
            lyric: "But it's worse to know, that I'm the reason, you won't come home"
        },
        {
            image: "https://i.pinimg.com/564x/ed/80/9a/ed809a83aa1b5d1032f0a0018264cca5.jpg",
            title: "Western Nights",
            lyric: "Trouble's always gonna find you baby, but so will I"
        },
        {
            image: "https://i.pinimg.com/736x/40/e0/03/40e00354600317312e6ec611fe6dc31a.jpg",
            title: "Family Tree",
            lyric: "These crosses all over my body, remind me of who I used to be"
        },
        {
            image: "https://i.pinimg.com/736x/c6/7f/f7/c67ff70dcb264844578b2f650391de24.jpg",
            title: "Hard Times",
            lyric: "I am poison in the water and unhappy, little girl who needs her daddy real bad"
        },
        {
            image: "https://i.pinimg.com/564x/0b/ec/89/0bec893ac1bbe32c4e15972604a0e93e.jpg",
            title: "Thoroughfare",
            lyric: "We finally reached the edge after all this time - I didn't find my love, but I still made it this far without it"
        },
        {
            image: "https://i.pinimg.com/564x/9d/b5/a6/9db5a6890d0d22a020c4bc24284b6b48.jpg",
            title: "Gibson Girl",
            lyric: "He's cold-blooded so it takes more time to bleed"
        },
        {
            image: "https://i.pinimg.com/564x/12/b9/99/12b999cbfc88f5efff17cd2870943065.jpg",
            title: "Ptolemaea",
            lyric: "I am the face of love's rage"
        },
        {
            image: "https://i.pinimg.com/564x/53/8d/53/538d531fd57e1c455d46e401f124b299.jpg",
            title: "August Underground",
            lyric: "🎵"
        },
        {
            image: "https://i.pinimg.com/564x/fe/41/27/fe41277d5f80df7a9c436138f177f1f5.jpg",
            title: "Televangelism",
            lyric: "🎵"
        },
        {
            image: "https://i.pinimg.com/564x/7b/16/e0/7b16e0bcc0688d97b93b32150af731a7.jpg",
            title: "Sun Bleached Flies",
            lyric: "I can't let go when something's broken, it's all I know and it's all I want now"
        },
        {
            image: "https://i.pinimg.com/736x/ab/72/79/ab72792df789ea3806e412dd1dc4d987.jpg",
            title: "Strangers",
            lyric: "Am I making you feel sick?"
        }
    ];

    return (
        
<div>
    <h1 className='carousel-title'>Songs</h1>

        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {songs.map((song, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <div className="d-flex justify-content-around">
                            <div className="card carousel-component">
                                <img src={song.image} className="card-img-top" alt={`Slide ${index + 1}`} />
                                <div className="card-body">
                                    <h1>{song.title}</h1>
                                    <p className="card-text">{song.lyric}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
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
        </div>
    );
};

export default Carousel;

