import React from "react";


const Navbar = () => {
    const NavbarContent = {
        logo: "https://i.namu.wiki/i/8x2OWgwE9C2VexaRRyaSP0jCk1G3X4yd1VEm9-VNJOUJQ8iur9kOLdoKjlYV1Xs3yzsLU0N6K7comwnj_8A6gA.webp",
    };

    return (
        <nav className="navbar">
            <div className="container fixed-top">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={NavbarContent.logo} alt="Ethel Cain Logo" className="navbar-logo" />
                </a>
            </div>
        </nav>
    );
};


export default Navbar;
