import React, { useState, useLayoutEffect } from 'react';
import Image from '../components/Image';

const imagesContainer = (props) => {
  const { images } = props;

  const [page, setPage] = useState(0);

  const decrementPage = () => {
    if (page > 0) setPage((prevState) => (prevState -= 1));
  };

  const incrementPage = () => {
    if (page * size < images.length - 1)
      setPage((prevState) => (prevState += 1));
  };

  let size = 0;

  if (screen.width < 768) {
    size = 1;
  } else {
    size = 3;
  }

  useLayoutEffect(() => {
    if (page === 0) {
      document.getElementById('decrement').disabled = true;
    } else if (page === images.length - 1) {
      document.getElementById('increment').disabled = true;
    } else {
      document.getElementById('decrement').disabled = false;
      document.getElementById('increment').disabled = false;
    }
  }, [page]);

  return (
    <div className="row w-100">
      <div className="col d-flex justify-content-lg-between">
        <button onClick={decrementPage} id="decrement">
          <i className="fas fa-caret-left"></i>
        </button>
      </div>
      {images.slice(page * size, (page + 1) * size).map((image) => (
        <Image place={image.place} image={image.image} key={image.image} />
      ))}

      <div className="col d-flex justify-content-lg-between">
        <button onClick={incrementPage} id="increment">
          <i className="fas fa-caret-right"></i>
        </button>
      </div>
    </div>
  );
};

export default imagesContainer;
