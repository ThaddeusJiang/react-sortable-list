# React Sortable List

## Features

- [x] Easy Drag & Drop sort items

## Install

```
npm install @thaddeusjiang/react-sortable-list
```

## Usage

### Use Case 1: ItemRender

```jsx
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
      itemRender={({ item }: ItemRenderProps) => (
        <div className="w-1/2 h-10 m-8 bg-blue-400 text-center">
          {item.name}
        </div>
      )}
    />
  );
};
```

### Use Case 2: Children

```jsx
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
              {item.name}
            </SortableItem>
          ))}
        </>
      )}
    </SortableList>
  );
};
```

### TypeScript

```ts

```

## Development
### Storybook

Run inside another terminal:

```bash
yarn storybook
```


### Example

Then run the example inside another:

```bash
yarn link @thaddeusjiang/react-sortable-list

cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

