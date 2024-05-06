import "./App.css";
import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { itemInterface } from "./interfaces";
import { DeleteItemContext, HandleCheckedContext } from "./context";

export default function App() {
  const [itemsArray, setItemsArray] = useState<itemInterface[]>([]);
  const addItems = (itemObj: itemInterface) => {
    setItemsArray([...itemsArray, itemObj]);
  };
  const deleteItem = (itemIndex: number) => {
    setItemsArray(itemsArray.filter((item) => item.id !== itemIndex));
  };
  const emptyItem = () => {
    setItemsArray([]);
  };

  function handleChecked(id: number) {
    /*============= This is how you change a value in an object ================*/
    /*============= which is inside an array ================*/
    setItemsArray((itemsArray) =>
      itemsArray.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    /*=============================*/
  }
  return (
    <div className="app">
      <Logo />
      <Form setItemArray={addItems} />

      <DeleteItemContext.Provider value={{ deleteItem, emptyItem }}>
        <HandleCheckedContext.Provider value={handleChecked}>
          <PackingList itemsArray={itemsArray} />
        </HandleCheckedContext.Provider>
      </DeleteItemContext.Provider>

      <Stats itemsArray={itemsArray} />
    </div>
  );
}
