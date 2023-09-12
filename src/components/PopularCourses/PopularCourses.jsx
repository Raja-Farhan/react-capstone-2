import React from "react";
import "./PopularCourses.css";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Component } from "react";
import Slider from "react-slick";
import next from "../../assets/images/next.webp";
import prev from "../../assets/images/prev.webp";
import course1 from "../../assets/images/course1.svg";
import course2 from "../../assets/images/course2.svg";
import course3 from "../../assets/images/course3.svg";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
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

const PrevButton = (
  <button className="prev-button position-absolute">
    <img src={prev} className="pre-button" alt="" />
  </button>
);

const NextButton = (
  <button className="next-button">
    <img src={next} alt="" />
  </button>
);

const PopularCourses = () => {
  return (
    <>
      <div className="container courses-container me-auto ms-auto mt-lg-5 mb-5 pb-5">
        <div className="row mt-lg-5 pt-lg-5 ms-lg-4 ps-lg-3">
          <div className="col-12 pt-lg-5">
            <h4 className="courses-heading pt-lg-5">Our popular courses</h4>
          </div>
        </div>
        <div className="row pb-lg-5 ms-lg-4 ps-lg-3">
          <div className="col-5">
            <p className="courses-para">
              Build new skills with new trendy courses and shine for the next
              future career.
            </p>
          </div>
        </div>
        <div className="custom-carousel mb-lg-5 pb-lg-5">
          <Slider {...settings} prevArrow={PrevButton} nextArrow={NextButton}>
            <div className="card">
              <img src={course1} className="me-0" alt="Slide 1" />
              <div className="d-flex justify-content-between ps-3 pe-3 pt-4">
                <p className="card-title">Basic web design</p>
                <p className="rating">
                  &#9733; <span> 4.5</span>
                </p>
              </div>
              <p className="card-para ps-3 pe-3">
                Get the best course, gain knowledge and shine for your future
                career.
              </p>
              <div className="d-flex justify-content-between ps-3 pe-3 pb-4 pt-3">
                <p className="price mb-0 mt-2">&#36; 120.75</p>
                <div>
                  <button className="btn book-btn rounded-5 px-4 py-3">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={course2} alt="Slide 2" />
              <div className="d-flex justify-content-between ps-3 pe-3 pt-4">
                <p className="card-title">UI/UX design</p>
                <p className="rating">
                  &#9733; <span> 4.5</span>
                </p>
              </div>
              <p className="card-para ps-3 pe-3">
                Get the best course, gain knowledge and shine for your future
                career.
              </p>
              <div className="d-flex justify-content-between ps-3 pe-3 pb-4 pt-3">
                <p className="price mb-0 mt-2">&#36; 120.75</p>
                <div>
                  <button className="btn book-btn rounded-5 px-4 py-3">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={course3} alt="Slide 3" />
              <div className="d-flex justify-content-between ps-3 pe-3 pt-4">
                <p className="card-title">Web App design</p>
                <p className="rating">
                  &#9733; <span> 4.5</span>
                </p>
              </div>
              <p className="card-para ps-3 pe-3">
                Get the best course, gain knowledge and shine for your future
                career.
              </p>
              <div className="d-flex justify-content-between ps-3 pe-3 pb-4 pt-3">
                <p className="price mb-0 mt-2">&#36; 120.75</p>
                <div>
                  <button className="btn book-btn rounded-5 px-4 py-3">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={course2} alt="Slide 4" />
              <div className="d-flex justify-content-between ps-3 pe-3 pt-4">
                <p className="card-title">Basic web design</p>
                <p className="rating">
                  &#9733; <span> 4.5</span>
                </p>
              </div>
              <p className="card-para ps-3 pe-3">
                Get the best course, gain knowledge and shine for your future
                career.
              </p>
              <div className="d-flex justify-content-between ps-3 pe-3 pb-4 pt-3">
                <p className="price mb-0 mt-2">&#36; 120.75</p>
                <div>
                  <button className="btn book-btn rounded-5 px-4 py-3">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default PopularCourses;
