import React from 'react'
import './Reviews.css'
import Slider from 'react-slick'
import student from '../../assets/images/student.svg'
import comma from '../../assets/images/comma.svg'


const settings ={
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint:768 ,
            settings:{
                slidesToShow: 1,
            },
        },
    ],
};

const Reviews = () => {
  return (
    <div className='container-fluid carousel-container mb-5 '>
        <div className="custom-carousel mb-lg-5 pb-lg-5 position-relative">
          <Slider {...settings}>
            <div className="d-flex justify-content-between mt-5">
              <div className='ms-4 mt-lg-5 pt-lg-2'>
                  <img src={student} className="mb-2" alt="Slide 1" />
                  <p className='student-name mb-1'>Peter Moor</p>
                  <p className='student-course'>Student of Web Design</p>
              </div>  
              <div className="mt-lg-5">
                <img src={comma} alt="" />
                <p className='comment'>Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills I've learned."</p>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-5">
              <div className='ms-4 mt-lg-5 pt-lg-2'>
                  <img src={student} className="mb-2" alt="Slide 2" />
                  <p className='student-name mb-1'>Peter Moor</p>
                  <p className='student-course'>Student of Web Design</p>
              </div>  
              <div className="mt-lg-5">
                <img src={comma} alt="" />
                <p className='comment'>Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills I've learned."</p>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-5">
              <div className='ms-4 mt-lg-5 pt-lg-2'>
                  <img src={student} className="mb-2" alt="Slide 3" />
                  <p className='student-name mb-1'>Peter Moor</p>
                  <p className='student-course'>Student of Web Design</p>
              </div>  
              <div className="mt-lg-5">
                <img src={comma} alt="" />
                <p className='comment'>Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills I've learned."</p>
              </div>
            </div>
          </Slider>
        </div>
    </div>
  )
}

export default Reviews