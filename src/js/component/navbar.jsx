import React from "react";

//include images into your bundle



const Navbar = () => {

    const NavbarText = {
        title : "Adventure Horizon",
        op1 : "Inicio",
        op2 : "Servicios",
        op3 : "Contacto"
    };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{NavbarText.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">{NavbarText.op1}</a>
                        <a className="nav-link" href="#">{NavbarText.op2}</a>
                        <a className="nav-link" href="#">{NavbarText.op3}</a>
                    </div>
                </div>
            </div>
        </nav>);
};

export default Navbar;
