import React from 'react';

import Title from './Title/Title.jsx';
import Cars from './Cars/Cars.jsx';
import cars from './Cars/cars.js';

const App = () => (
  <>
    <Title />
    <Cars cars={cars} />
  </>
);

export default App;
