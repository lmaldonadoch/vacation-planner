import React from 'react';
import { Link } from 'react-router-dom';

const imagesContainer = (props) => {
  const { place, image, description } = props;
  return (
    <div className="Image col-12 col-md-4 destination-card d-flex flex-column align-items-center">
      <Link to={`/${place}`} key={'destinations'}>
        <div
          className="image-div"
          style={{ background: `url(${image}) center center no-repeat` }}
        ></div>
        <div className="destination-info">
          <div className="destination-name-wrapper">
            <h5 className="destination-name">{place}</h5>
          </div>
          <p className="country-description">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default imagesContainer;
