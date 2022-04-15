<h1 align="center">Welcome to @thaddeusjiang/react-sortable-list 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@thaddeusjiang/react-sortable-list" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@thaddeusjiang/react-sortable-list.svg">
  </a>
  <a href="https://github.com/ThaddeusJiang/react-sortable-list#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ThaddeusJiang/react-sortable-list/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/ThaddeusJiang/react-sortable-list/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/ThaddeusJiang/@thaddeusjiang/react-sortable-list" />
  </a>
  <a href="https://twitter.com/ThaddeusJiang" target="_blank">
    <img alt="Twitter: ThaddeusJiang" src="https://img.shields.io/twitter/follow/ThaddeusJiang.svg?style=social" />
  </a>
</p>

> You should focus the logics of your app, not DnD.

### 🏠 [Homepage](https://github.com/ThaddeusJiang/react-sortable-list#readme)

### ✨ [Demo](https://react-sortable-list.vercel.app/)

## Features

- [x] Easy Drag & Drop sort items

## Install

```sh
yarn add @thaddeusjiang/react-sortable-list
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
yarn start #

```

### Run tests

```sh
yarn run test
```

## Author

👤 **Thaddeus Jiang**

* Website: https://thaddeusjiang.com/
* Twitter: [@ThaddeusJiang](https://twitter.com/ThaddeusJiang)
* Github: [@ThaddeusJiang](https://github.com/ThaddeusJiang)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ThaddeusJiang/react-sortable-list/issues). You can also take a look at the [contributing guide](https://github.com/ThaddeusJiang/react-sortable-list/blob/main/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Thaddeus Jiang](https://github.com/ThaddeusJiang).<br />
This project is [MIT](https://github.com/ThaddeusJiang/react-sortable-list/blob/main/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_