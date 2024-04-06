import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { items } from "./components/PackingList";
import { useState } from "react";
export default function App() {
  const [itemsArray, setItemsArray] = useState<items[]>([]);

  const setItemArray = (itemObj: items) => {
    setItemsArray([...itemsArray, itemObj]);
  };
  return (
    <div className="app">
      <Logo />
      <Form props={setItemArray} />
      <PackingList {...itemsArray} />
      <Stats />
    </div>
  );
}
