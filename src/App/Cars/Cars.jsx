import React from 'react';
import PropTypes from 'prop-types';

import Car from './Car.jsx';

const Cars = ({ cars }) => (
  <ul>
    {cars.map((car) => (
      <li key={car.brand}>
        <Car {...car} />
      </li>
    ))}
  </ul>
);

Cars.propTypes = {
  cars: PropTypes.array.isRequired
};

export default Cars;
