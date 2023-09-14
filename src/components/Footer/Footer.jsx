import React from 'react'
import './Footer.css'
import footer_logo from "../../assets/images/footer_logo.svg"
import social_media from "../../assets/images/social.svg"
import divider2 from "../../assets/images/line2.svg"
import footer_divider from "../../assets/images/big_divider.svg"


const Footer = () => {
  return (
    <>
        <div className='footer-section container-fluid'>
            <div className="row pt-lg-5 pb-lg-5">
                <div className="col-6 col-lg-2 col-xl-3 left-column">
                    <img src={footer_logo} className='mb-4 ms-lg-3 ps-lg-1' alt="" />
                    <div className="row mt-lg-2 ms-lg-2">
                        <div className="col-12 col-lg-11 col-xl-11">
                             <p>Need to help for your dream Career? trust us. With lesson, study becomes a lot easier with us.</p>
                        </div>
                    </div>
                    <img src={social_media} className='ms-lg-3 ps-lg-1 mt-lg-2' alt="" />
                </div>
                <div className="col-4 col-lg-2 col-xl-2 ms-lg-5 ps-lg-5 first-links-col">
                    <p className='links-head'>Company</p>
                    <img src={divider2} alt="" />
                    <p><a href="/" className='text-decoration-none links'>About Us</a></p>
                    <p><a href="/" className='text-decoration-none links'>Features</a></p>
                    <p><a href="/" className='text-decoration-none links'>Our Pricing</a></p>
                    <p><a href="/" className='text-decoration-none links'>Latest News</a></p>
                </div>
                <div className="col-4 col-lg-2 col-xl-2 first-links-col">
                    <p className='links-head'>Support</p>
                    <img src={divider2} alt="" />
                    <p><a href="/" className='text-decoration-none links'>FAQ's</a></p>
                    <p><a href="/" className='text-decoration-none links'>Terms & Conditions</a></p>
                    <p><a href="/" className='text-decoration-none links'>Privacy Policy</a></p>
                    <p><a href="/" className='text-decoration-none links'>Contact Us</a></p>
                </div>
                <div className="col-6 col-lg-2 col-xl-2 first-links-col">
                    <p className='links-head'>Company</p>
                    <img src={divider2} alt="" />
                    <p><span className='text-white fw-bold'>Location: </span><span>27 Division St, New York, NY 10002, USA</span></p>
                    <p><span className='text-white fw-bold'>Email: </span><span>email@gmail.com</span></p>
                    <p><span className='text-white fw-bold'>Phone: </span><span>+ 000 1234 567 890</span></p>
                </div>    
            </div>
            <div className='row '>
                <div className="col-sm-6 col-lg-12 col-xl-12 text-center">
                    <img src={footer_divider} className='w-100' alt="" />
                </div>
            </div>    
            <div className='row pt-2 pb-2'>
                <div className="col-12 text-center">
                    <p className='copyright-para'>Copyright ©2022 webdesign.gdn All rights reserved</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
