import { useState } from "react";
import { items } from "./PackingList";
export default function Form({
  setItemArray,
}: {
  setItemArray: (itemObj: items) => void;
}) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); // Prevents the default action of the form
    if (!item) return; // If the item is empty, return (do nothing (guard clause))
    const newItem: items = {
      description: item,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };
    setItemArray(newItem);
    console.log(newItem);
    setItem("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

// What I learnt from this code:

//  onChange Event Handler ==>
// .target --> which is the form element on which the event occurred,
// .value --> which is the value of the element that the event occurred on.

// defaultValue={quantity} ==>
// The defaultValue attribute sets the default value for the specified form element (in the case here, the select element has default value of quantity).

// onSubmit Event Handler ==>The onSubmit event handler is used to validate the contents of a form before it is submitted. It is used to check the form data before it is sent to the server.

// Controlled Components ==>
// The input value is controlled by React (using State), and the state is updated by the onChange event handler.

// event.preventDefault() ==>  The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

// Array.from() Method ==>
// Syntax:
// Array.from(arrayLike, mapFn?, thisArg?)

// Working:
// The `Array.from()` method in JavaScript is used to create a new array from an array-like or iterable object. It takes three optional parameters: `arrayLike`, `mapFn`, and `thisArg`.

// Parameters:
// 1. `arrayLike`: This parameter represents an array-like or iterable object from which to create a new array. An array-like object is an object that has a length property and indexed elements, such as a string or an HTML collection. An iterable object is an object that can be iterated over, such as an array or a Map.

// 2. `mapFn` (optional): This parameter is an optional mapping function that can be used to manipulate each element of the array during the creation process. It is called with three arguments: the current element, the index of the element, and the array being created. The return value of the `mapFn` is used as the value for the corresponding index in the new array.

// 3. `thisArg` (optional): This parameter is an optional value that can be used as the `this` value when executing the `mapFn` function.

// Note that `Array.from()` is a static method of the `Array` object, so you can call it directly on the `Array` constructor without creating an instance of `Array`.
