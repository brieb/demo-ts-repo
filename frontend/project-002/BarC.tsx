import React from "react";
import FooC from ":project-001/FooC";

type Props = {};

function BarB({  }: Props) {
  return (
    <div>
      <FooC message="Hello, world." />
    </div>
  );
}

export default BarB;
