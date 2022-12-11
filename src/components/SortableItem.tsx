import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { SortableItemProps } from './SortableList';

export const SortableItem = (props: SortableItemProps) => {
  const { DragHandler, className } = props;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return DragHandler ? (
    <div ref={setNodeRef} style={style} className={className}>
      <DragHandler {...attributes} {...listeners} />
      {props.children}
    </div>
  ) : (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={className}
    >
      {props.children}
    </div>
  );
};
