import { ReactNode } from 'react';

import '../../assets/css/site.css';

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

export default function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul className='list'>{items.map(renderItem)}</ul>;
}
