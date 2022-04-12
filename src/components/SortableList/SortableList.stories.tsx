import { useState } from '@storybook/addons';
import { Meta } from '@storybook/react';
import React from 'react';

import {
  SortableItemProps,
  SortableList,
  SortableListRenderProps,
} from './SortableList';

export default {
  component: SortableList,
  title: 'components/SortableList',
} as Meta;

export const Basic: React.VFC = () => {
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
