import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  SortableItemProps,
  SortableList,
  SortableListRenderProps,
} from '@thaddeusjiang/react-sortable-list';

import { useState } from 'react';

const App = () => {
  const [items, setItems] = useState<SortableItemProps[]>([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);
  return (
    <SortableList items={items} setItems={setItems}>
      {({ item }: SortableListRenderProps) => (
        <div className="w-1/2 h-10 m-8 bg-blue-400 text-center">
          {item.name}
        </div>
      )}
    </SortableList>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
