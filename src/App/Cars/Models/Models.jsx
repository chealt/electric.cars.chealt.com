import React from 'react';
import PropTypes from 'prop-types';

import Model from './Model.jsx';

const Models = ({ brand, models }) => (
  <ul>
    {models.map((model) => (
      <Model key={model.name} brand={brand} {...model} />
    ))}
  </ul>
);

Models.propTypes = {
  brand: PropTypes.string.isRequired,
  models: PropTypes.array
};

export default Models;
