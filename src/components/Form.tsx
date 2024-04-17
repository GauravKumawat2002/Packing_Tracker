import { useState } from "react";
import { itemInterface, FormProps } from "../interfaces";

export default function Form({ setItemArray }: FormProps) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!item) return;
    const newItem: itemInterface = {
      description: item,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };
    setItem("");
    setQuantity(1);
    setItemArray(newItem);
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
