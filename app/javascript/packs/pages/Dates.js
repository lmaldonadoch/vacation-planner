import React from 'react';
import { useSelector } from 'react-redux';

const Dates = ({ match }) => {
  const { country, city } = match.params;

  const userState = useSelector((state) => state.user);
  const destinationsState = useSelector((state) => state.destinations);

  console.log(destinationsState, userState);

  const destination = destinationsState.destinations.filter(
    (destination) => destination.attributes.place === country
  );

  console.log(destination, destination[0]);

  const image = destination[0].images.filter(
    (selectedCity) => selectedCity.attributes.city === city
  );

  const image_id = image[0].id;

  const destination_id = destination[0].id;

  const user_id = userState.user.id;

  console.log(destination_id, user_id, image_id);

  return (
    <div className="Dates col-12 col-md-10">
      <form></form>
    </div>
  );
};

export default Dates;
