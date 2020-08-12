import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Image from '../components/Image';
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const imagesContainer = props => {
  const { images } = props;

  const [page, setPage] = useState(0);

  let size = 0;

  if (window.screen.width < 768) {
    size = 1;
  } else {
    size = 3;
  }

  const decrementPage = () => {
    if (page > 0) setPage(prevState => (prevState -= 1));
  };

  const incrementPage = () => {
    if ((page + 1) * size < images.length) setPage(prevState => (prevState += 1));
  };

  useLayoutEffect(() => {
    if (page === 0) {
      document.getElementById('decrement').disabled = true;
      document.getElementById('decrement').classList.add('disabled');
      document.getElementById('increment').classList.remove('disabled');
    } else if ((page + 1) * size >= images.length) {
      document.getElementById('increment').disabled = true;
      document.getElementById('increment').classList.add('disabled');
      document.getElementById('decrement').classList.remove('disabled');
    } else {
      document.getElementById('decrement').disabled = false;
      document.getElementById('increment').disabled = false;

      document.getElementById('decrement').classList.remove('disabled');
      document.getElementById('increment').classList.remove('disabled');
    }
  }, [page]);

  return (
    <div className="ImagesContainer d-flex align-items-center w-100">
      <div className="col-1 d-flex justify-content-lg-between">
        <button
          onClick={decrementPage}
          id="decrement"
          className="left"
          type="button"
        >
          <i className="fas fa-caret-left" />
        </button>
      </div>
      <div className="row w-100">
        {images
          .slice(page * size, Math.min((page + 1) * size, images.length))
          .map(image => (
            <Image
              place={image.place}
              image={image.image}
              description={image.description}
              key={image.image}
            />
          ))}
      </div>
      <div className="col-1 d-flex justify-content-lg-between">
        <button
          onClick={incrementPage}
          id="increment"
          className="right"
          type="button"
        >
          <i className="fas fa-caret-right" />
        </button>
      </div>
    </div>
  );
};

imagesContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  images: PropTypes.array.isRequired,
};

export default imagesContainer;
