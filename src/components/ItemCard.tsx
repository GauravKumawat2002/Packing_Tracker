import { itemInterface } from "../interfaces";
import { useState } from "react";

export default function ItemCard({ id, quantity, description }: itemInterface) {
  const [isPacked, setIsPacked] = useState(false);

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={isPacked}
        onChange={() => setIsPacked(!isPacked)}
      />
      <span
        style={
          isPacked
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {quantity} {description}
      </span>

      <button>❌</button>
    </li>
  );
}
