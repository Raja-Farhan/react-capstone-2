import React from 'react'
import './NavBar.css'
import logo from '../../assets/images/logo.svg'


const NavBar = () => {
  return (
    <>
        <div className='container-fluid p-0'>
            <nav className="navbar navbar-expand-lg">
              <div className="container py-2">
                <a className="navbar-brand ms-lg-5 ps-lg-3" href="/"><img src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto ">
                    <li className="nav-item me-5 mt-auto">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item me-5 mt-auto">
                      <a className="nav-link" href="/">Courses</a>
                    </li>
                    <li className="nav-item me-5 mt-auto">
                      <a className="nav-link" href="/">Pricing</a>
                    </li>
                    <li className="nav-item me-5 mt-auto">
                      <a className="nav-link" href='/'>Reviews</a>
                    </li>
                    <li>
                        <button className='btn btn-signup px-5 rounded-5'>Sign Up</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
    </>
  )
}

export default NavBar