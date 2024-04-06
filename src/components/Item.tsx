import { items } from "./PackingList";
import { useState } from "react";

export default function Item({ id, quantity, description }: items) {
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
