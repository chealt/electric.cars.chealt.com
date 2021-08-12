import React from 'react';
import PropTypes from 'prop-types';

import Models from './Models/Models.jsx';

const Car = ({ brand, models }) => (
  <>
    <span>{brand}</span>
    <Models brand={brand} models={models} />
  </>
);

Car.propTypes = {
  brand: PropTypes.string.isRequired,
  models: PropTypes.array
};

export default Car;
