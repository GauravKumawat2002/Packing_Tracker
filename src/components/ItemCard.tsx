import { itemInterface } from "../interfaces";
import { useContext, useState } from "react";
import { ItemArrayModificationContext, SetPackedItemContext } from "../context";
export default function ItemCard({
  id,
  quantity,
  description,
  packed,
}: itemInterface) {
  const [discarded, setDiscarded] = useState(false);

  const modifyArrayItems = useContext(ItemArrayModificationContext);
  const handleDelete = () => {
    if (modifyArrayItems) {
      setDiscarded(!discarded); // Toggling the discard state
      modifyArrayItems(id); // Passing the id directly
    }
  };

  const togglePackedItem = useContext(SetPackedItemContext);
  const handleCheckbox = () => {
    if (togglePackedItem) togglePackedItem(!packed);
  };
  return !discarded ? (
    <li key={id}>
      <input type="checkbox" checked={packed} onChange={handleCheckbox} />
      <span
        style={
          packed
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
