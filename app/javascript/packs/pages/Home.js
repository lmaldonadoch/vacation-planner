import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { destinationsLoad } from '../actions/DestinationActions';
import Spinner from 'react-bootstrap/Spinner';

const Home = () => {
  // Modal
  const [show, setShow] = useState(false);
  const [currentDestination, setCurrentDestination] = useState({
    images: [],
    attributes: { place: '' },
  });
  const handleClose = () => {
    setShow(false);
    setIndex2(0);
  };
  const handleShow = (destination) => {
    setShow(true);
    setCurrentDestination(destination);
  };

  // Carousel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Carousel 2
  const [index2, setIndex2] = useState(0);
  const handleSelect2 = (selectedIndex, e) => {
    setIndex2(selectedIndex);
  };

  const destinationsState = useSelector((state) => state.destinations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(destinationsLoad());
  }, []);

  console.log(destinationsState);

  if (destinationsState.destinations.length > 1) {
    return (
      <div className="Home col-12 col-md-9 d-flex flex-column align-items-center justify-content-center">
        <div className="title">
          <h1>Vacations Destinations</h1>
          <p>Choose your favorite place and start scheduling</p>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {destinationsState.destinations.map((destination) => (
            <Carousel.Item key={destination.id}>
              <img
                className="d-block w-100"
                src={destination.images[0].attributes.image_url}
                alt={destination.id}
                onClick={() => handleShow(destination)}
              />
              <Carousel.Caption>
                <h3>{destination.attributes.place}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{currentDestination.attributes.place}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel activeIndex={index2} onSelect={handleSelect2}>
              {currentDestination.images.map((image) => (
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
          </Modal.Body>
        </Modal>
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
