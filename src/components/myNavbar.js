import React, { Component } from "react";
import $ from "jquery"; // Bootstrap core JS
// import "jquery.easing"; // Third party plugin JS

class MyNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
      target: "#myNavbar",
      offset: 75,
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
      $(".navbar-collapse").collapse("hide");
    });
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#myNavbar").offset().top > 100) {
        $("#myNavbar").addClass("navbar-scrolled");
      } else {
        $("#myNavbar").removeClass("navbar-scrolled");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  }

  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="myNavbar"> */}
        {/* <nav className="navbar navbar-expand-lg sticky-top" id="myNavbar"> */}
        <nav className="navbar navbar-expand-lg fixed-top" id="myNavbar">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navbar-brand js-scroll-trigger" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#myNavbarHome">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#myNavbarLink">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#myNavbarDisabled">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="mt-5">
          <p className="p-5 m-5"></p>
          <p className="p-5 m-5"></p>
          <section id="myNavbarHome">
            <p className="p-5 m-5">Home</p>
          </section>
          <section id="myNavbarLink">
            <p className="p-5 m-5">Link</p>
          </section>
          <section id="myNavbarDropdown">
            <p className="p-5 m-5">Dropdown</p>
          </section>
          <section id="myNavbarAction">
            <p className="p-5 m-5">Action</p>
          </section>
          <section id="myNavbarAnother">
            <p className="p-5 m-5">Another</p>
          </section>
          <section id="myNavbarSomething">
            <p className="p-5 m-5">Something</p>
          </section>
          <section id="myNavbarDisabled">
            <p className="p-5 m-5">Disabled</p>
          </section>
        </div>
      </div>
    );
  }
}

export default MyNavbar;
