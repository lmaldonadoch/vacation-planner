import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { destinationsLoad } from '../actions/DestinationActions';
import Spinner from 'react-bootstrap/Spinner';
import ImagesContainer from '../containers/ImagesContainer';

const Home = () => {
  const destinationsState = useSelector((state) => state.destinations);
  let imagesToDisplay = [];

  useEffect(() => {
    dispatch(destinationsLoad());
  }, []);

  useEffect(() => {
    if (!destinationsState.isFetching) {
      destinationsState.destinations.forEach((destination) => {
        imagesToDisplay.push({
          place: destination.attributes.place,
          image: destination.images[0].attributes.image_url,
        });
      });
    }
  }, [destinationsState.isFetching]);

  console.log(destinationsState);

  if (imagesToDisplay.length > 1) {
    return (
      <div className="Home col-12 col-md-9 d-flex flex-column align-items-center justify-content-center">
        <div className="title">
          <h1>Vacations Destinations</h1>
          <p>Choose your favorite place and start scheduling</p>
        </div>
        <ImagesContainer images={imagesToDisplay} />
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

export default Home;
