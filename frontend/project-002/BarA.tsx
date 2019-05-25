import React from "react";
import FooA from ":project-001/FooA";
import { f } from ":project-001/a";

f({ m: 'm' });

type Props = {};

function BarA({  }: Props) {
  return (
    <div>
      <FooA />
    </div>
  );
}

export default BarA;
