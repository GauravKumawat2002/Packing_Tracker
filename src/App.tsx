import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { itemInterface } from "./interfaces";
import { useState } from "react";

export default function App() {
  const [itemsArray, setItemsArray] = useState<itemInterface[]>([]);

  const setItemArray = (itemObj: itemInterface) => {
    setItemsArray([...itemsArray, itemObj]);
  };
  return (
    <div className="app">
      <Logo />
      <Form setItemArray={setItemArray} />
      <PackingList itemsArray={itemsArray} />
      <Stats />
    </div>
  );
}
