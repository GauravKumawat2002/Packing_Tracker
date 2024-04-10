import { itemInterface } from "../interfaces";
import { useContext, useState } from "react";
import { ItemArrayModificationContext } from "../context";
export default function ItemCard({ id, quantity, description }: itemInterface) {
  const [isPacked, setIsPacked] = useState(false);
  const [discarded, setDiscarded] = useState(false);

  const modifyArrayItems = useContext(ItemArrayModificationContext);
  const handleDelete = () => {
    if (modifyArrayItems) {
      setDiscarded(!discarded); // Toggling the discard state
      modifyArrayItems(id); // Passing the id directly
    }
  };

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

      <button onClick={handleDelete}>❌</button>
    </li>
  ) : null;
}
