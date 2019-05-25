import React from "react";

interface WithHoc2Props {
  styles: { [key: string]: unknown };
  css(): void;
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export default function withHoc2<P>(
  Component: React.ComponentType<P>
): React.ComponentType<Omit<P, keyof WithHoc2Props>> {
  type Props = Omit<P, keyof WithHoc2Props>;
  return class WithStyles extends React.Component<Props> {
    render() {
      // @ts-ignore
      return <Component {...this.props} css={() => {}} styles={{}} />;
    }
  };
}
