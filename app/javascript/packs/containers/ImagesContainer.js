import React, { useState, useLayoutEffect } from 'react';
import Image from '../components/Image';

const imagesContainer = (props) => {
  const { images } = props;

  const [page, setPage] = useState(0);

  const decrementPage = () => {
    if (page > 0) setPage((prevState) => (prevState -= 1));
  };

  const incrementPage = () => {
    if ((page + 1) * size < images.length)
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
        <button onClick={decrementPage} id="decrement" className="left">
          <i className="fas fa-caret-left"></i>
        </button>
      </div>
      <div className="row w-100">
        {images
          .slice(page * size, Math.min((page + 1) * size, images.length))
          .map((image) => (
            <Image
              place={image.place}
              image={image.image}
              description={image.description}
              key={image.image}
            />
          ))}
      </div>
      <div className="col-1 d-flex justify-content-lg-between">
        <button onClick={incrementPage} id="increment" className="right">
          <i className="fas fa-caret-right"></i>
        </button>
      </div>
    </div>
  );
};

export default imagesContainer;
