import React from "react";
import { FaArrowRightLong, FaFacebook, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import SocialIconLink from "./SocialIconLink";
import { FaArrowRight } from "react-icons/fa";
import NewsFeedItem from "./NewsFeedItem";

export default function Footer() {
  return (
    <footer >
      <section className="bg-white border ">
        <div className='container '>
          <div className='row row-cols-1 row-cols-lg-4 py-5'>
            <div className='col col-lg-3 '>
              <p className='fs-4 '>About Us</p>
              <p className='text-secondary '>
              We know there are a lot of threa developers our but we pride into a firm in the industry.
              </p>

              
            </div>
            <div className='col col-lg-4'>
              <p className='fs-5 '>Feature</p>

              <ul className='row row-cols-lg-1 list-group list-group-flush  ' id='footer-icon-links'>
                <li className='list-group-item col'>
                  <a className='align-items-center ' href='/About'>
                    <span>About Us</span>
                  </a>
                </li>
                <li className='list-group-item col'>
                  <a className='align-items-center ' href='PrivacyPolicy'>
                    <span>Terms Condition</span>
                  </a>
                </li>
                <li className='list-group-item col'>
                  <a className='align-items-center ' href='AllProduct'>
                    <span>Best Products</span>
                  </a>
                </li>
               
               
              </ul>
            </div>
             <div className='col col-lg-2 '>
              <p className='fs-5 '>General Links</p>

              <ul className='row row-cols-lg-1 list-group list-group-flush  ' id='footer-icon-links'>
                <li className='list-group-item col'>
                  <a className='align-items-center ' href='/Blog'>
                    <span>Blog</span>
                  </a>
                </li>
                <li className='list-group-item col'>
                  <a className='align-items-center ' href='/TrackOrder'>
                    <span>Tracking Order</span>
                  </a>
                </li>
                <li className='list-group-item col'>
                  <a className='align-items-center ' href='/SellerApplication'>
                    <span>Become Seller</span>
                  </a>
                </li>
               
               
              </ul>
            </div>
             <div className='col col-lg-3 '>
              <p className='fs-5 '>Helpful</p>

              <ul className='row row-cols-lg-2 list-group list-group-flush  ' id='footer-icon-links'>
                <li className='list-group-item col'>
                  <a className='align-items-center ' href='/AllProduct'>
                    <span>Flash Sale</span>
                  </a>
                </li>
                <li className='list-group-item col'>
                  <a className='align-items-center ' href='/PrivacyPolicy'>
                    <span>FAQ</span>
                  </a>
                </li>
                <li className='list-group-item col'>
                  <a className='align-items-center ' href='/PrivacyPolicy'>
                    <span>Support</span>
                  </a>
                </li>
               
               
              </ul>
            </div>
            
          </div>
        </div>
      </section>
      
      <section className='bg-white align-items-center py-5'>
  <div className='container'>
    <div className='row '>
      <div className="col-lg-2">
      <nav className='nav' id='footer-socials'>
       <SocialIconLink url={"https://www.instagram.com"}>
          <FaInstagram />
        </SocialIconLink>
        <SocialIconLink url={"https://www.facebook.com"}>
          <FaFacebookF />
        </SocialIconLink>
        
        <SocialIconLink url={"https://www.youtube.com"}>
          <FaYoutube />
        </SocialIconLink>
        </nav>
        </div>
      
      <div className='col-lg-7 py-2 align-items-center '>
      ©2022 Quomodosoft. All rights reserved
    </div>
     <div className='col-lg-3 align-items-center'>
      <img src="/payment-getways.png" alt="Payment Gateways" />
    </div>
    </div>
    
   
  </div>
</section>

    </footer>
  );
}
