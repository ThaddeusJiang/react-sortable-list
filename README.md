# Welcome to @thaddeusjiang/react-sortable-list 👋

You should focus the `features` of your app, not DnD boilerplate.

[![Version](https://img.shields.io/npm/v/@thaddeusjiang/react-sortable-list.svg)](https://www.npmjs.com/package/@thaddeusjiang/react-sortable-list)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/thaddeusjiang/react-sortable-list#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/thaddeusjiang/react-sortable-list/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/thaddeusjiang/react-sortable-list)](https://github.com/thaddeusjiang/react-sortable-list/blob/dev/LICENSE)
[![Twitter: ThaddeusJiang](https://img.shields.io/twitter/follow/ThaddeusJiang.svg?style=social)](https://twitter.com/ThaddeusJiang)

## Features

- [x] Easy Drag & Drop sort items
- [x] Both [Render Props](https://reactjs.org/docs/render-props.html) and [Children](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)
- [x] Custom Drag Handler
- [x] Horizontal Sortable List

### 🏠 [Homepage](https://github.com/ThaddeusJiang/react-sortable-list#readme)

## Install

```sh
yarn add @thaddeusjiang/react-sortable-list
```

## Usage

## Usage

if you don't use [Tailwind CSS](https://tailwindcss.com/)

```ts
import { SortableList } from '@thaddeusjiang/react-sortable-list';
import '@thaddeusjiang/react-sortable-list/dist/index.css';

<SortableList ... />
```

if you use [Tailwind CSS](https://tailwindcss.com/)

```ts
import { SortableList } from '@thaddeusjiang/react-sortable-list';

<SortableList ...>
```

modify tailwind.config.js

```diff
// tailwind.config.js
+ const path = require("path");

module.exports = {
  content: [
    "./src/**/*{js,ts,jsx,tsx}",
+    path.join(
+      require.resolve("@thaddeusjiang/react-sortable-list"),
+      "../**/*.{js,ts,jsx,tsx}"
+    ),
  ],
  theme: {},
  plugins: [],
};
```

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

### Use Case 3: Custom Drag Handler

<details>

```jsx

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

```

</details>

### Use Case 4: Horizontal Sortable List

<details>

```jsx
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

```

</details>

## Development

### Storybook

Run inside another terminal:

```bash
yarn storybook
```

### Example

Then run the example inside another:

```bash
yarn link

cd example
yarn link "@thaddeusjiang/react-sortable-list"
yarn # or yarn to install dependencies
yarn start
```

### Run tests

```sh
yarn run test
```

## Author

👤 **Thaddeus Jiang**

- Website: https://thaddeusjiang.com/
- Twitter: [@ThaddeusJiang](https://twitter.com/ThaddeusJiang)
- Github: [@ThaddeusJiang](https://github.com/ThaddeusJiang)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ThaddeusJiang/react-sortable-list/issues). You can also take a look at the [contributing guide](https://github.com/ThaddeusJiang/react-sortable-list/blob/main/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Thaddeus Jiang](https://github.com/ThaddeusJiang).<br />
This project is [MIT](https://github.com/ThaddeusJiang/react-sortable-list/blob/main/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
