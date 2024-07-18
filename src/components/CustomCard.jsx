import React from 'react';
import {  FaStar } from "react-icons/fa";
const CustomCard = () => {

  const cardData = {
    title: 'Lorem ipsum dolor sit amet',
    content:
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'John Doe',
    location: 'London, UK',
    avatarUrl: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg',
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div>
            <span className="d-flex text-warning">
              <p>
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </p>
            </span>
            <p className="card-text">{cardData.content}</p>
            <div className="d-flex align-items-center mb-3">
              <div className="me-2">
                <img
                  src={cardData.avatarUrl}
                  className="rounded-circle"
                  alt="Author Photo"
                  style={{ width: '40px', height: '40px' }}
                />
              </div>
              <div>
                <h6 className="mt-0">{cardData.author}</h6>
                <small>{cardData.location}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
