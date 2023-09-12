import React from "react";
import "./Blog.css";
import Slider from "react-slick";
import blog1 from "../../assets/images/blog1.svg";
import blog2 from "../../assets/images/blog2.svg";
import blog3 from "../../assets/images/blog3.svg";
import dot from "../../assets/images/ellipse.svg";
import divider from "../../assets/images/line.svg";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slideToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Blog = () => {
  return (
    <>
      <div className="container-fluid blog-container mb-5 pb-5">
        <div className="row pt-5 mt-5 mb-3">
          <div className="col-12 pt-4 text-center">
            <h3 className="blog-head">Our blog</h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-5">
          <div className="col-8 col-lg-4 col-xl-4 text-center">
            <p className="blog-para">
              Read our regular travel blog and know the latest update of tour
              and travel
            </p>
          </div>
        </div>

        <div className="custom-carousel-2 mb-lg-5 pb-lg-5">
          <Slider {...settings}>
            <div className="card border-0">
              <img src={blog1} className="me-0" alt="Slide 1" />
              <div className="d-flex ps-3 pe-3 pt-4">
                <img src={dot} className="mb-3 me-2" alt="" />
                <p className="date">21 November 2021</p>
              </div>
              <img src={divider} className="ms-3 mb-3" alt="" />
              <p className="card-para ps-3 pe-3">
                How to become a pro web designer in 2022 and get remote job?
              </p>
              <div className="ps-3 pe-3 pb-4 pt-3">
                <button className="btn book-btn rounded-5 px-4 py-3">
                  Read More
                </button>
              </div>
            </div>
            <div className="card border-0">
              <img src={blog2} className="me-0" alt="Slide 2" />
              <div className="d-flex ps-3 pe-3 pt-4">
                <img src={dot} className="mb-3 me-2" alt="" />
                <p className="date">21 November 2021</p>
              </div>
              <img src={divider} className="ms-3 mb-3" alt="" />
              <p className="card-para ps-3 pe-3">
                How to become a pro web designer in 2022 and get remote job?
              </p>
              <div className="ps-3 pe-3 pb-4 pt-3">
                <button className="btn book-btn rounded-5 px-4 py-3">
                  Read More
                </button>
              </div>
            </div>
            <div className="card border-0">
              <img src={blog3} className="me-0" alt="Slide 3" />
              <div className="d-flex ps-3 pe-3 pt-4">
                <img src={dot} className="mb-3 me-2" alt="" />
                <p className="date">21 November 2021</p>
              </div>
              <img src={divider} className="ms-3 mb-3" alt="" />
              <p className="card-para ps-3 pe-3">
                How to become a pro web designer in 2022 and get remote job?
              </p>
              <div className="ps-3 pe-3 pb-4 pt-3">
                <button className="btn book-btn rounded-5 px-4 py-3">
                  Read More
                </button>
              </div>
            </div>
            <div className="card border-0">
              <img src={blog2} className="me-0" alt="Slide 4" />
              <div className="d-flex ps-3 pe-3 pt-4">
                <img src={dot} className="mb-3 me-2" alt="" />
                <p className="date">21 November 2021</p>
              </div>
              <img src={divider} className="ms-3 mb-3" alt="" />
              <p className="card-para ps-3 pe-3">
                How to become a pro web designer in 2022 and get remote job?
              </p>
              <div className="ps-3 pe-3 pb-4 pt-3">
                <button className="btn book-btn rounded-5 px-4 py-3">
                  Read More
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Blog;
