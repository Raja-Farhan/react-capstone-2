import React from "react";
import "./JoinNow.css";
import right_image from "../../assets/images/next-step.svg";

const JoinNow = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-6 ms-lg-3 mt-lg-5 pt-lg-3">
            <div className="row head-row">
              <div className="col-12">
                <h3 className="main-heading pb-lg-2">
                  Take the next step toward your personal and professional goals
                  with Lesson.
                </h3>
              </div>
            </div>
            <div className="row head-row">
              <div className="col-12">
                <p className="para pb-lg-3">
                  Take the next step toward. Join now to recieve personlized and
                  more recommendations from the full Coursera Catalog.
                </p>
              </div>
            </div>
            <div className="row head-row">
              <div className="col-12">
                <button className="btn btn-join rounded-5">Join Now</button>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 mb-5 mt-lg-0 col-lg-5 col-xl-5 d-flex justify-content-center">
            <img src={right_image} className="right-image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinNow;
