import React from "react";
import "./HeroSection.css";
import Hero from "../../assets/images/hero.svg";
import HeroSecond from "../../assets/images/hero_secondary.png";
import playIcon from '../../assets/images/play_icon.svg';


const HeroSection = () => {
  return (
    <>
      <div className="container-fluid hero-section pt-5 pb-5 mb-5">
        <div className="row pb-5 d-flex justify-content-center">
          <div className="col-sm-12 col-lg-6 col-xl-6 d-flex justify-content-center">
            <div className="position-relative">
              <img src={Hero} className="hero-image" alt="" />
              <div className="position-absolute hero-secondary">
                <img src={HeroSecond} className="hero-second-image" alt="" />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 col-xl-6">
            <div className="row d-flex justify-content-center mt-5 pt-3">
              <div className="col-sm-12 col-lg-9 col-xl-9">
                <h1 className="main-heading">Learn without limits and spread knowledge.</h1>
              </div>
            </div>
            <div className="row d-flex justify-content-center pt-3 pb-4">
              <div className="col-sm-12 col-lg-9 col-xl-9">
                <h5 className="secondary-heading">Build new skills for that “this is my year” feeling with courses, certificates, and degrees from world-class universities and companies.</h5>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-sm-4 col-lg-4 col-xl-4 ms-lg-5 ps-lg-5">
                <button className="btn btn-play px-4 py-3 rounded-5">See Courses</button>
              </div>
              <div className="col-sm-12 col-lg-4 col-xl-4 ps-0 pt-3 pt-lg-0 d-flex justify-content-lg-center justify-content-sm-start">
                  <img src={playIcon} alt="" />
                  <p className="watch-video pt-3">Watch Video</p>
              </div>
            </div>
            <div className="row pt-4 d-flex justify-content-center">
              <div className="col-12 ms-lg-5 ps-lg-5 pt-2">
                <p className="recent-para ms-lg-4 ps-lg-1">Recent engagement</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-sm-12 col-lg-4 col-xl-4 ms-lg-5 ps-lg-5">
                  <p className="end-para">50K <span className="end-span">Students</span></p>
              </div>
              <div className="col-sm-12 col-lg-4 col-xl-4 ps-lg-4">
                  <p className="end-para">70+ <span className="end-span">Courses</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
