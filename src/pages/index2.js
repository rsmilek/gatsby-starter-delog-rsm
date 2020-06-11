import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navigation2 from "../components/navigation2";

const index2Page = ({ data: { site } }) => {
  return (
    <div id="page-top">
      <Helmet>
        <title>Contact - {site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      {/* <!-- Navigation--> */}
      <Navigation2 />
      {/* <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">
            Start Bootstrap
          </a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto my-2 my-lg-0">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#services">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      {/* <!-- Masthead--> */}
      <header class="masthead">
        <div class="container h-100">
          <div class="row h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-10 align-self-end">
              <h1 class="text-uppercase text-white font-weight-bold">
                Your Favorite Source of Free Bootstrap Themes
              </h1>
              <hr class="divider my-4" />
            </div>
            <div class="col-lg-8 align-self-baseline">
              <p class="text-white-75 font-weight-light mb-5">
                Start Bootstrap can help you build better websites using the Bootstrap framework! Just
                download a theme and start customizing, no strings attached!
              </p>
              <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- About--> */}
      <section class="page-section bg-primary" id="about">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="text-white mt-0">We've got what you need!</h2>
              <hr class="divider light my-4" />
              <p class="text-white-50 mb-4">
                Start Bootstrap has everything you need to get your new website up and running in no time!
                Choose one of our open source, free to download, and easy to use themes! No strings attached!
              </p>
              <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services--> */}
      <section class="page-section" id="services">
        <div class="container">
          <h2 class="text-center mt-0">At Your Service</h2>
          <hr class="divider my-4" />
          <div class="row">
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <i class="fa-4x text-primary mb-4">
                  <FontAwesomeIcon icon={faGem} />
                </i>
                <h3 class="h4 mb-2">Sturdy Themes</h3>
                <p class="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <i class="fa-4x text-primary mb-4">
                  <FontAwesomeIcon icon={faLaptopCode} />
                </i>
                <h3 class="h4 mb-2">Up to Date</h3>
                <p class="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <i class="fa-4x text-primary mb-4">
                  <FontAwesomeIcon icon={faGlobe} />
                </i>
                <h3 class="h4 mb-2">Ready to Publish</h3>
                <p class="text-muted mb-0">You can use this design as is, or you can make changes!</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <i class="fa-4x text-primary mb-4">
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <h3 class="h4 mb-2">Made with Love</h3>
                <p class="text-muted mb-0">Is it really open source if it's not made with love?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Portfolio--> */}
      <div id="portfolio">
        <div class="container-fluid p-0">
          <div class="row no-gutters">
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg">
                <img class="img-fluid" src={"../../assets/img/portfolio/thumbnails/1.jpg"} alt="" />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg">
                <img class="img-fluid" src={"../../assets/img/portfolio/thumbnails/2.jpg"} alt="" />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg">
                <img class="img-fluid" src={"../../assets/img/portfolio/thumbnails/3.jpg"} alt="" />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg">
                <img class="img-fluid" src={"../../assets/img/portfolio/thumbnails/4.jpg"} alt="" />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg">
                <img class="img-fluid" src={"../../assets/img/portfolio/thumbnails/5.jpg"} alt="" />
                <div class="portfolio-box-caption">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a class="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg">
                <img class="img-fluid" src={"../../assets/img/portfolio/thumbnails/6.jpg"} alt="" />
                <div class="portfolio-box-caption p-3">
                  <div class="project-category text-white-50">Category</div>
                  <div class="project-name">Project Name</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Call to action--> */}
      <section class="page-section bg-dark text-white">
        <div class="container text-center">
          <h2 class="mb-4">Free Download at Start Bootstrap!</h2>
          <a class="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">
            Download Now!
          </a>
        </div>
      </section>
      {/* <!-- Contact--> */}
      <section class="page-section" id="contact">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Let's Get In Touch!</h2>
              <hr class="divider my-4" />
              <p class="text-muted mb-5">
                Ready to start your next project with us? Give us a call or send us an email and we will get
                back to you as soon as possible!
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i class="fa-3x mb-3 text-muted">
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <div>+1 (555) 123-4567</div>
            </div>
            <div class="col-lg-4 mr-auto text-center">
              <i class="fa-3x mb-3 text-muted">
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              {/* <!-- Make sure to change the email address in BOTH the anchor text and the link target below!--> */}
              <a class="d-block" href="mailto:contact@yourwebsite.com">
                contact@yourwebsite.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index2Page;
export const pageQuery = graphql`
  query Index2PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;