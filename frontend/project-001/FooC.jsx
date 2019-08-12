import React from "react";
import PropTypes from 'prop-types';

function FooC({ message }) {
  return <div>{message}</div>;
}

FooC.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FooC;
