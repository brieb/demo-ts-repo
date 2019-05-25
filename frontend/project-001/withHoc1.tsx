import React from "react";

export interface WithHoc1Props {
  styles: { [key: string]: unknown };
  css(): void;
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export default function withHoc1(options: unknown) {
  console.log(options);
  return function withHoc1Helper<P>(
    Component: React.ComponentType<P>
  ): React.ComponentType<Omit<P, keyof WithHoc1Props>> {
    type Props = Omit<P, keyof WithHoc1Props>;
    return class WithStyles extends React.Component<Props> {
      render() {
        // @ts-ignore
        return <Component {...this.props} css={() => {}} styles={{}} />;
      }
    };
  };
}
