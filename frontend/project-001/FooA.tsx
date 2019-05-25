import React from "react";
import withHoc1, { WithHoc1Props } from "./withHoc1";
import withHoc2 from "./withHoc2";

type FooAProps = {
  name?: string;
} & WithHoc1Props;

class FooA extends React.Component<FooAProps> {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

export default withHoc2(withHoc1({})(FooA));
