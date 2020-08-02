import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { destinationsLoad } from '../actions/DestinationActions';

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const destinationsState = useSelector((state) => state.destinations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(destinationsLoad());
  }, []);

  console.log(destinationsState);

  return (
    <div className="col-12 col-md-9">
      <button onClick={handleShow}>Show modal</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
