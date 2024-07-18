import React, { useEffect } from "react";
import {  FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pcart({ title, rate, pic, pprice, nprice }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div
        className="d-flex bg-white mb-5 flex-column property-card align-items-center Pcart position-relative"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="700"
      >

      

      <div className=" d-flex bg-white mb-5 flex-column property-card align-items-center Pcart position-relative">
        <div>
          <img src={pic} alt="" className="img-fluid" />
        </div>
        <div className="p-4">
          <div className="text-warning">
            {[...Array(rate)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <div>
            <p className="fw-bold">{title}</p>
          </div>
          <div className="d-flex">
            <p className="text-secondary fs-5 fw-bold d-flex">
              <del>{pprice}</del>
              <p className="px-3 d-flex text-danger fs-5 fw-bold">{nprice}</p>
            </p>
          </div>
        </div>
        <div className=" narenji access1 position-absolute bottom-0 mb-3 p-2 px-4 small ">
          Add To Cart
        </div>
        <div className="position-absolute top-0 start-0 end-0 bottom-0 access">
          <div className="align-self-end">
            <span className="bg-primarygray d-flex flex-column mt-5 m-3">
              <a href=""><img src="/download (9).png" alt="" /></a>
            </span>
            <span className="bg-primarygray d-flex flex-column m-3">
              <a href=""><img src="/download (10).png" alt="" /></a>
            </span>
            <span className="bg-primarygray d-flex flex-column m-3">
              <a href=""><img src="/download (7).png" alt="" /></a>
            </span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
