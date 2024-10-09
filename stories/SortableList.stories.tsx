import { useState } from '@storybook/addons';
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
};

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

const data = Array.from({ length: 30 }, (_, index) => ({
  id: `${index}`,
  name: `Item ${index}`,
}));

export const DraggingScrollingExample: React.VFC = () => {
  const [items, setItems] = useState<SortableItemProps[]>(data);
  return (
    <SortableList
      items={items}
      setItems={setItems}
      itemRender={({ item }: ItemRenderProps) => <Item name={item.name} />}
    />
  );
};

export const DragHandlerExample: React.VFC = () => {
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
              className="flex border items-center w-40 bg-white"
            >
              <div>{item.name}</div>
            </SortableItem>
          ))}
        </div>
      )}
    </SortableList>
  );
};

export const ComplexComponentExample: React.VFC = () => {
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
              className="flex border justify-between items-center  max-w-lg w-auto bg-white"
            >
              <input
                key={item.id}
                type="text"
                className="w-full h-8 rounded border m-4 px-2"
                id={item.id}
                value={item.name}
                onChange={(event) => {
                  const newItems = [...items];
                  const index = newItems.findIndex(
                    (item) => item.id === event.target.id
                  );
                  newItems[index].name = event.target.value;
                  setItems(newItems);
                }}
              />
              <button
                className=" flex justify-center items-center h-8 w-8 rounded border m-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white duration-300"
                onClick={() => {
                  const newItems = [...items];
                  const index = newItems.findIndex(({ id }) => id === item.id);
                  newItems.splice(index, 1);
                  setItems(newItems);
                }}
              >
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
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

export const Disabled: React.VFC = () => {
  const [items, setItems] = useState<SortableItemProps[]>([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);
  return (
    <SortableList
      disabled
      items={items}
      setItems={setItems}
      itemRender={({ item }: ItemRenderProps) => <Item name={item.name} />}
    />
  );
};
