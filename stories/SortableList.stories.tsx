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

const DragHandler = (props) => (
  <div
    {...props}
    className=" flex justify-center items-center h-8 w-8 rounded border m-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-white duration-300"
  >
    <div className="" title="drag handler">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
        />
      </svg>
    </div>
  </div>
);

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
    { id: '3', name: 'Item 3' },
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

export const DragHandleExample: React.VFC = () => {
  const [items, setItems] = useState<SortableItemProps[]>([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  return (
    <SortableList items={items} setItems={setItems}>
      {({ items }: { items: SortableItemProps[] }) => (
        <div className="space-y-4">
          {items.map((item: SortableItemProps) => (
            <SortableItem
              key={item.id}
              id={item.id}
              DragHandler={DragHandler}
              className="flex border items-center w-40"
            >
              <div>{item.name}</div>
            </SortableItem>
          ))}
        </div>
      )}
    </SortableList>
  );
};

export const HorizontalExample: React.VFC = () => {
  const [items, setItems] = useState<SortableItemProps[]>([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);
  return (
    <div className="flex space-x-4">
      <SortableList
        items={items}
        setItems={setItems}
        itemRender={({ item }: ItemRenderProps) => <Item name={item.name} />}
        horizontal
      />
    </div>
  );
};
