# React Sortable List

## Features

- [x] Easy Drag & Drop sort items

## Install

```
npm install @thaddeusjiang/react-sortable-list
```

## Usage

```js
const [items, setItems] = useState<SortableItemProps[]>([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
  ]);

<SortableList items={items} setItems={setItems}>
  {({ item }: SortableListRenderProps) => (
    <YourComponent />
  )}
</SortableList>
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
yarn link "@thaddeusjiang/react-sortable-list"

cd example
npm i # or yarn to install dependencies
npm start # or yarn start
```

