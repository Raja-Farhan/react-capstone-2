import React from 'react'
import './OutComes.css'
import Learner1 from '../../assets/images/learner1.svg'
import Learner2 from '../../assets/images/learner2.svg'

const OutComes = () => {
  return (
    <>
        <div className="container outcomes-section pt-5 mb-5 pb-5">
            <div className="row mt-lg-5 pt-lg-5 d-flex justify-content-center">
                <div className="col-sm-12 col-lg-6 col-xl-6">
                    <div className='row'>
                        <div className="col-sm-12 col-lg-5 col-xl-5 mt-lg-4 me-3">
                            <img src={Learner1} className="ps-3 ps-lg-0 ms-4 ms-lg-0" alt="" />
                        </div>
                        <div className="col-sm-12 col-lg-6 col-xl-6 mt-lg-0 ms-lg-0">
                            <img src={Learner2} className='ps-3 ps-lg-0 ms-4 ms-lg-0' alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 col-xl-6 mt-lg-5 pt-lg-2 ps-lg-4">
                    <div className="row head-row">
                        <div className="col-10">
                            <h4 className='main-heading'>Learner outcomes through our awesome platform</h4>
                        </div>
                    </div>
                    <div className="row head-row">
                        <div className="col-9">
                            <p className='main-para'>87% of people learning for professional development report career benefits like getting a promotion, a raise, or starting a new career.</p>
                        </div>
                    </div>
                    <div className="row head-row">
                        <div className="col-12">
                            <p className='sub-para'>Lesson Impact Report (2022)</p>
                        </div>
                    </div>
                    <div className="row mt-lg-2 head-row">
                        <div className="col-12">
                            <button className='btn btn-sign-up py-3 rounded-5'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OutComes