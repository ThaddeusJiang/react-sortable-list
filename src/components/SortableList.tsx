import React, { FC } from 'react';
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
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableItem } from './SortableItem';

export type SortableItemProps = {
  id: string;
  DragHandler?: FC;
  className?: string;
} & {
  [key: string]: any;
};

export type ItemRenderProps = {
  item: SortableItemProps;
};

export type ChildrenProps = {
  items: SortableItemProps[];
};

export type SortableListProps = {
  items: SortableItemProps[];
  setItems: React.Dispatch<React.SetStateAction<SortableItemProps[]>>;
  itemRender?: ({ item }: ItemRenderProps) => JSX.Element;
  children?: ({ items }: ChildrenProps) => JSX.Element;
  horizontal?: boolean;
  disabled?: boolean;
};

// TODO: Headless UI Component
export const SortableList: FC<SortableListProps> = (props) => {
  const {
    items,
    setItems,
    children,
    itemRender,
    horizontal,
    disabled = false,
  } = props;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  if (disabled) {
    return (
      <>
        {children
          ? children({ items })
          : items.map((item) => itemRender?.({ item }))}
      </>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items}
        strategy={
          horizontal
            ? horizontalListSortingStrategy
            : verticalListSortingStrategy
        }
      >
        {children
          ? children({ items })
          : items.map((item) => {
              return (
                <SortableItem key={item.id} id={item.id}>
                  {/* @ts-ignore */}
                  {itemRender({ item })}
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
