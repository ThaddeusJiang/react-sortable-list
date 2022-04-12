import React, { FC, ReactNode } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableItem } from './SortableItem';

export type SortableItemProps = { id: string } & { [key: string]: any };

export type SortableListProps = {
  items: SortableItemProps[];
  setItems: React.Dispatch<React.SetStateAction<SortableItemProps[]>>;
  children: ReactNode;
};

export type SortableListRenderProps = {
  item: SortableItemProps;
};

// TODO: Headless UI Component
export const SortableList: FC<SortableListProps> = (props) => {
  const { items, setItems, children } = props;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item) => {
          return (
            <SortableItem key={item.id} id={item.id}>
              {/* @ts-ignore */}
              {children({ item })}
            </SortableItem>
          );
        })}
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event: { active: any; over: any }) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items: SortableItemProps[]) => {
        const ids = items.map((item: SortableItemProps) => item.id);
        const oldIndex = ids.indexOf(active.id);
        const newIndex = ids.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
};
