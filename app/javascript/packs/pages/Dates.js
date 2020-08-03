import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Dates = ({ match }) => {
  let { country, city } = match.params;

  const userState = useSelector((state) => state.user);
  const destinationsState = useSelector((state) => state.destinations);

  const setDestination = () => {
    const destination = destinationsState.destinations.filter(
      (destination) => destination.attributes.place === country
    );

    const image = destination[0].images.filter(
      (selectedCity) => selectedCity.attributes.city === city
    );

    const image_id = image[0].id;

    const destination_id = destination[0].id;

    const user_id = userState.user.id;
  };

  useEffect(() => {
    setDestination;
  }, [country, city]);

  console.log();

  return (
    <div className="Dates col-12 col-md-10">
      <form></form>
    </div>
  );
};

export default Dates;
