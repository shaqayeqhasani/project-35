import React from "react";
import logo from "/logo.png";

export default function Navbar() {
  return (
    <section id='topnav' className='w-100  z-3 mt=0 small' >
 
 <div className='upper-row-1 d-flex bg-white border border-b'>
  <div className="col-lg-5">
    <a href='/' className='link-dark text-decoration-none mx-2'>
      Account
    </a>
    <a href='/TrackOrder' className='link-dark text-decoration-none mx-2'>
      Track Order
    </a>
    <a href='/Faq' className='link-dark text-decoration-none mx-2'>
      Support
    </a>
  </div>
  <div className="col-lg-4">
  
  </div>
  <ul className='navbar-nav d-flex flex-row'>

    <li className='nav-item dropdown custom-dropdown d-none d-lg-block'>
      <a className='nav-link dropdown-toggle d-flex"' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
        <span><img src="/country-logo-16x16.png" alt="" /></span> United State
      </a>
      <ul className='dropdown-menu'>
        <li>
          <a className='dropdown-item' href='#'>
            United State
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            United State
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            India
          </a>
        </li>
      </ul>
    </li>

    <li className='nav-item dropdown custom-dropdown d-none d-lg-block'>
      <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
        USD
      </a>
      <ul className='dropdown-menu'>
        <li>
          <a className='dropdown-item' href='#'>
            USD
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            BDT
          </a>
        </li>
      </ul>
    </li>
 
    <li className='nav-item dropdown custom-dropdown d-none d-lg-block'>
      <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
        Bangla
      </a>
      <ul className='dropdown-menu'>
        <li>
          <a className='dropdown-item' href='#'>
            Bangla
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            English
          </a>
        </li>
      </ul>
    </li>
  </ul>
</div>

   
       
        <div className='container-fluid  navbar navbar-expand-lg px-0 bg-white py-3'>
        <div className='container-fluid col-3 navbar navbar-expand-lg px-0 py-0 d-xl-none '>       
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='offcanvas offcanvas-start' tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
            <div className='offcanvas-header'>
              
              <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
            </div>
            <div className='offcanvas-body'>
              <div className='ms-auto d-flex align-items-center fw-bold'>
                <i
                  className='fas fa-search text-secondary mx-2'
                  role='button'
                  data-bs-toggle='modal'
                  data-bs-target='#searchModal'></i>
              </div>
              <ul className='navbar-nav  pe-3 mt-2  col-lg-2 '> 
              <li className='nav-item dropdown btn btn-light px-4'>
                  <a className='nav-link dropdown-toggle p-0' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false' >
               All Categories
                  </a>
                  <ul className='dropdown-menu px-4'>
                    <li>
                      <a className='dropdown-item small' href='/AllProduct'>
                       Mobiles and Laptops
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item small ' href='/AllProduct'>
                       Gaming Entertainment
                      </a>
                    </li>
                  </ul>
                </li>
                </ul>
              <ul className='navbar-nav  pe-3 align-items-center col-lg-7 fw-bold'>
              <li className='nav-item dropdown main-meue-3 '>
                  <a className='nav-link dropdown-toggle' href='/' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                 Homepage
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='/'>
                      Home One
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#/'>
                      Home Two
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item dropdown main-meue-3'>
                  <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
               Shop
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item small' href='/AllProduct'>
                     All Product
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item dropdown main-meue-3'>
                  <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                 Pages
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='/PrivacyPolicy'>
                      Privacy Policy
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item main-meue-3'>
                  <a className='nav-link' href='/About'>
                    About
                  </a>
                </li>
                <li className='nav-item main-meue-3'>
                  <a className='nav-link' href='/Blog'>
                    Blog
                  </a>
                </li>
                <li className='nav-item main-meue-3'>
                   <a className='nav-link ' aria-current='page' href='/Contact'>
               Contact
                   </a>
                 </li>
              </ul>
            <div className=" col-lg-2"><a href="/SellerApplication"> <button className='btn btn-dark  text-white d-none'>Become a Seller</button></a> 
            </div>
            </div>
          </div>
        </div>
        <a className='navbar-brand col-5 col-lg-3 mx-3 d-flex justify-content-center' href='/'>
    <img src={logo} alt='' />
</a>

  <div className='d-flex align-items-center col-5 col-lg-6 mx-5 d-none d-lg-block'>
  <div className='input-group me-2'>
    <input type='text' placeholder='Search...' className='form-control' />
    <select className='form-select'>
      <option value='category1'>ALL Categories</option>
    </select>
    <button className='btn narenji text-dark'>Search</button>
  </div>
</div>
  <div className=" d-flex col-3 col-lg-1">
               <a href="/Pcomparison"><img src="/download (7).png" alt=""  className=" px-2 d-none d-lg-block"/></a>
                <a href="/Whishlist"><img src="/download (10).png" alt="" className=" px-2 d-none d-lg-block"/></a>
               <a href="/Cart"> <img src="/download (11).png" alt="" className=" px-2" /></a>
                 <a href="/Dashboard"><img src="/download (8).png" alt="" className=" px-2 d-none d-lg-block" /></a>
               </div>
</div>
<div className='container-fluid  narenji navbar navbar-expand-lg px-0 py-0 d-none d-lg-block'>       
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='offcanvas offcanvas-start' tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
            <div className='offcanvas-header'>
             
              <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
            </div>
            <div className='offcanvas-body'>
              <div className='ms-auto d-flex align-items-center fw-bold'>
                <i
                  className='fas fa-search text-secondary mx-2'
                  role='button'
                  data-bs-toggle='modal'
                  data-bs-target='#searchModal'></i>
              </div>
              <ul className='navbar-nav  pe-3 mt-2  col-lg-2 '> 
              <li className='nav-item dropdown btn btn-square bg-white px-5'>
                  <a className='nav-link dropdown-toggle p-0' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false' >
               All Categories
                  </a>
                  <ul className='dropdown-menu px-4'>
                    <li>
                      <a className='dropdown-item small' href='/AllProduct'>
                       Mobiles and Laptops
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item small ' href='/AllProduct'>
                       Gaming Entertainment
                      </a>
                    </li>
                  </ul>
                </li>
                </ul>
              <ul className='navbar-nav  pe-3 align-items-center col-lg-7 fw-bold'>
              <li className='nav-item dropdown main-meue-3 '>
                  <a className='nav-link dropdown-toggle' href='/' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                 Homepage
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='/'>
                      Home One
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#/'>
                      Home Two
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item dropdown main-meue-3'>
                  <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
               Shop
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item small' href='/AllProduct'>
                     All Product
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item dropdown main-meue-3'>
                  <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                 Pages
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='/PrivacyPolicy'>
                      Privacy Policy
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item main-meue-3'>
                  <a className='nav-link' href='/About'>
                    About
                  </a>
                </li>
                <li className='nav-item main-meue-3'>
                  <a className='nav-link' href='/Blog'>
                    Blog
                  </a>
                </li>
                <li className='nav-item main-meue-3'>
                   <a className='nav-link ' aria-current='page' href='/Contact'>
               Contact
                   </a>
                 </li>
              </ul>
            <div className=" col-lg-2"><a href="/SellerApplication"> <button className='bg-black text-white  fw-bold m-2 px-3 p-2 '>Become a Seller</button></a> 
            </div>
            </div>
          </div>
        </div>
        
    </section>
  );
}
