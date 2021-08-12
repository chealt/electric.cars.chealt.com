import React from 'react';
import PropTypes from 'prop-types';

import Model from './Model.jsx';

const Models = ({ models }) => (
  <ul>
    {models.map((model) => (
      <Model key={model.name} {...model} />
    ))}
  </ul>
);

Models.propTypes = {
  models: PropTypes.array
};

export default Models;
