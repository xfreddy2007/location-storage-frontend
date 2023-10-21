import React, { ComponentPropsWithRef, ElementType, Fragment } from 'react';

type IFProps<E extends ElementType = 'div'> = React.PropsWithChildren & {
  conditional?: boolean;
  as?: E;
};

type OmitIFProps<E extends ElementType> = IFProps<E> & Omit<ComponentPropsWithRef<E>, keyof IFProps<E>>;

const IF = <T extends ElementType = 'div'>(props: OmitIFProps<T>) => {
  const { conditional, children, as: Component = Fragment, ...rest } = props;

  if (!conditional) {
    return null;
  }
  return <Component {...rest}>{children}</Component>;
};

export default IF;
