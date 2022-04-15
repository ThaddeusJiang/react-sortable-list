import { useState } from '@storybook/addons';
import { Meta } from '@storybook/react';
import React from 'react';

import {
  SortableItemProps,
  SortableList,
  ItemRenderProps,
  SortableItem,
} from '../src/index';

export default {
  component: SortableList,
  title: 'components/SortableList',
} as Meta;

const Item = ({ name }: { name: string }) => (
  <div className="text-white flex justify-center items-center h-16 w-40 rounded border m-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
    <div className="">{name}</div>
  </div>
);

export const ItemRenderExample: React.VFC = () => {
  const [items, setItems] = useState<SortableItemProps[]>([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);
  return (
    <SortableList
      items={items}
      setItems={setItems}
      itemRender={({ item }: ItemRenderProps) => <Item name={item.name} />}
    />
  );
};

export const ChildrenExample: React.VFC = () => {
  const [items, setItems] = useState<SortableItemProps[]>([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
  ]);

  return (
    <SortableList items={items} setItems={setItems}>
      {({ items }: { items: SortableItemProps[] }) => (
        <>
          {items.map((item: SortableItemProps) => (
            <SortableItem key={item.id} id={item.id}>
              <Item name={item.name} />
            </SortableItem>
          ))}
        </>
      )}
    </SortableList>
  );
};
