import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  SortableList,
  SortableItem,
  SortableItemProps,
  ItemRenderProps,
} from '@thaddeusjiang/react-sortable-list';

import { useState } from 'react';

const Item = ({ name }) => (
  <div className="text-white flex justify-center items-center h-16 w-40 rounded border m-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
    <div className="">{name}</div>
  </div>
);

const App = () => {
  const [items, setItems] = useState<SortableItemProps[]>([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  return (
    <div className="">
      <div>
        <h1>ItemRender Example</h1>
        <SortableList
          items={items}
          setItems={setItems}
          itemRender={({ item }: ItemRenderProps) => <Item name={item.name} />}
        />
      </div>

      <div>
        <h1>Children Example</h1>
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
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
