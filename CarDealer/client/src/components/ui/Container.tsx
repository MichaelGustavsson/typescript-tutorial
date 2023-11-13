import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from 'react';

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<R extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<R>) {
  const Component = as || 'div';
  return (
    <Component className='container' {...props}>
      {children}
    </Component>
  );
}
