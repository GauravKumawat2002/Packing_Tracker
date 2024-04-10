import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { itemInterface } from "./interfaces";
import { useState } from "react";
import { ItemArrayModificationContext } from "./context";

export default function App() {
  const [itemsArray, setItemsArray] = useState<itemInterface[]>([]);

  const setItemArray = (itemObj: itemInterface) => {
    setItemsArray([...itemsArray, itemObj]);
    console.log(`itemsArray when form is filled =`, itemsArray);
  };

  const modifyItemsArray = (itemIndex: number) => {
    const newItemsArray = itemsArray.filter((item) => item.id !== itemIndex);
    console.log(`Modified itemsArray state = `, newItemsArray);
    console.log(`itemsArray when Cross button is clicked =`, itemsArray);
    setItemsArray(newItemsArray);
  };

  return (
    <div className="app">
      <Logo />
      <Form setItemArray={setItemArray} />

      <ItemArrayModificationContext.Provider value={modifyItemsArray}>
        <PackingList itemsArray={itemsArray} />
      </ItemArrayModificationContext.Provider>

      <Stats itemsArray={itemsArray} />
    </div>
  );
}

//  onChange={() => modifyPackingStatus(count)}

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

// object ka type --> interface keyword se banta hai
// function ka type (function signature) --> type variableName = ((i: number) => void) | null
// Generic type --> jab kisi type definition ko angular brackets (< >) me wrap krte h to wo generic type hota h
