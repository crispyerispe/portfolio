import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#pageTop">
          Chelsea Erispe
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ml-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skillset">
                Skillset
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
