import React from 'react';
import PropTypes from 'prop-types';

const Model = ({ name, images }) => (
  <>
    <span>{name}</span>
    {images && (
      <ul>
        {images.map((image) => (
          <li key={image.url}>
            <img src={image.url} />
          </li>
        ))}
      </ul>
    )}
  </>
);

Model.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.array
};

export default Model;
