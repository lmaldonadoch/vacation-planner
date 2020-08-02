import React from 'react';

const imagesContainer = (props) => {
  const { place, image } = props;
  return (
    <div className="Image col-12 col-md-3 destination-card d-flex flex-column align-items-center">
      <div
        className="image-div"
        style={{ background: `url(${image}) center center no-repeat` }}
      ></div>
      <div className="destination-info">
        <h2 className="destination-name">{place}</h2>
      </div>
    </div>
  );
};

export default imagesContainer;
