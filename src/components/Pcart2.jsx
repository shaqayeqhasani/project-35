import React from 'react';
import { FaStar } from "react-icons/fa";
export default function Pcart2({ title, rate, pic, pprice, nprice }) {


      return (
        <div className="d-flex mb-3 flex-row border overflow-hidden property-card Pcart2">
          <div className="flex-shrink-0">
            <img src={pic} alt="" className="img-fluid" />
          </div>
          <div className="flex-grow-1 d-flex flex-column justify-content-between">
            <div className="p-4">
              <div className="text-warning">
                {[...Array(rate)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
             <a href="/SingleProduct" className='text-decoration-none text-black'> <p className="fw-bold">{title}</p></a>
            </div>
            <div className="p-4">
              <p className="text-secondary fs-5 fw-bold">
                <del>{pprice}</del>
              </p>
              <p className="text-danger fs-5 fw-bold">{nprice}</p>
            </div>
          </div>
        </div>
      );
    }
    

