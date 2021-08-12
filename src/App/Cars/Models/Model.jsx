import React from 'react';
import PropTypes from 'prop-types';

const Model = ({ brand, name, images, year }) => (
  <>
    <span>{name}</span>
    {images && (
      <ul>
        {images.map((image) => (
          <li key={image.defaultUrl}>
            <picture>
              {image.sources.map((source) => (
                <source key={source.url} srcSet={source.url} media={source.media}></source>
              ))}
              <img src={image.defaultUrl} alt={`${brand} ${name} ${year} ${image.name}`} />
            </picture>
          </li>
        ))}
      </ul>
    )}
  </>
);

Model.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.array,
  year: PropTypes.string.isRequired
};

export default Model;
