import React from "react";
import PropTypes from 'prop-types';

function FooC({ message }) {
  return <div>{message}</div>;
}

FooC.propTypes = {
  // TypeError: Cannot read property 'declarations' of undefined @ node_modules/typescript/lib/tsc.js:76013
  // message: PropTypes.string.isRequired,
};

export default FooC;
