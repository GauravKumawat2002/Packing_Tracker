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
  console.log(itemsArray);
  return (
    <div className="app">
      <Logo />
      <Form setItemArray={setItemArray} />
      <PackingList itemsArray={itemsArray} />
      <Stats />
    </div>
  );
}

// Here I need to make a function that pops-out the last element i.e., (items object) from the "itemsArray" & also sets the display of itemCard to null -->
// This all should happen only when the cross button is clicked.

// What will I require
// -> Lifting the state up from ItemCard.tsx to App.tsx
// -> Create a function to remove the item from the itemsArray (when clicking the cross the function should check what is the id of the current element whose cross button is clicked
// if(currentId === id of the button clicked )
// {
// then remove the specified index from the itemsArray
//  Hint:--> Use Array.find() & Array.splice() methods
// })
