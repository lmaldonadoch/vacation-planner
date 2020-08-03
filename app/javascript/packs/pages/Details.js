import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import { useLocation } from 'react-router-dom';

const Details = ({ match }) => {
  // Carousel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const location = useLocation();
  console.log(match, location.pathname.replace(/^\/+/g, ''));
  const country = match
    ? match.params.country
    : location.pathname.replace(/^\/+/g, '');
  const destinationsState = useSelector((state) => state.destinations);

  const [imagesToDisplay, setImagesToDisplay] = useState([]);

  useEffect(() => {
    setImagesToDisplay((prevState) =>
      prevState.concat(
        destinationsState.destinations.filter(
          (destination) => destination.attributes.place === country
        )
      )
    );
  }, []);

  console.log(imagesToDisplay);
  if (imagesToDisplay[0]) {
    return (
      <div className="Details col-12 col-md-9 d-flex flex-column align-items-center justify-content-center">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {imagesToDisplay[0].images.map((image) => (
            <Carousel.Item key={image.id}>
              <img
                className="d-block w-100"
                src={image.attributes.image_url}
                alt={image.id}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }

  return (
    <div className="Home col-12 col-md-9 d-flex align-items-center justify-content-center">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Details;
