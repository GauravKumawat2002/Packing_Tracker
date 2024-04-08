import { itemInterface } from "../interfaces";
import { useState } from "react";

export default function ItemCard({ id, quantity, description }: itemInterface) {
  const [isPacked, setIsPacked] = useState(false);
  const [discarded, setDiscarded] = useState(false);

  return !discarded ? (
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

      <button onClick={() => setDiscarded(!discarded)}>❌</button>
    </li>
  ) : null;
}
