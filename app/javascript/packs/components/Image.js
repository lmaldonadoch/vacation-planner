import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const imagesContainer = (props) => {
  const { place, image } = props;
  return (
    <div className="Image col-12 col-md-4 destination-card d-flex flex-column align-items-center">
      <Link to={`/${place}`} key={'destinations'}>
        <div
          className="image-div"
          style={{ background: `url(${image}) center center no-repeat` }}
        ></div>
        <div className="destination-info">
          <h2 className="destination-name">{place}</h2>
        </div>
      </Link>
    </div>
  );
};

export default imagesContainer;
