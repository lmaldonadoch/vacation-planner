import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const Details = ({ match }) => {
  // Carousel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const location = useLocation();
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

  if (imagesToDisplay[0]) {
    return (
      <div className="Details col-12 col-md-10 d-flex flex-column justify-content-center">
        <div className="title">
          <h2>{country}</h2>
          <p>Select your destination and start scheduling!</p>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center">
          <Link to="/" className="back-link">
            <button className="left">
              <i className="fas fa-caret-left"></i>
            </button>
          </Link>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={20000}
          >
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
          <div className="right-banner d-flex flex-column h-100 justify-content-center">
            <div className="city-info">
              <h2>{imagesToDisplay[0].images[index].attributes.city}</h2>
              <p>
                {imagesToDisplay[0].images[index].attributes.city_description}
              </p>
            </div>
            <Link
              to={`/dates/${country}/${imagesToDisplay[0].images[index].attributes.city}`}
              className="dates-button"
            >
              <button className="schedule-button">
                <i className="fas fa-calendar-alt"></i> Schedule Your Trip!
              </button>
            </Link>
          </div>
        </div>
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
