import { itemInterface } from "../interfaces";
import { useContext, useState } from "react";
import { DeleteItemContext, HandleCheckedContext } from "../context";

export default function ItemCard({
  id,
  quantity,
  description,
  packed,
}: itemInterface) {
  const [discarded, setDiscarded] = useState(false);
  const { deleteItem } = useContext(DeleteItemContext);
  const handleChecked = useContext(HandleCheckedContext);
  const handleDelete = () => {
    if (deleteItem !== null) {
      setDiscarded(!discarded); // Removes the item from the UI
      deleteItem(id); // Passing the id directly
    }
  };
  const handleCheck = () => {
    if (handleChecked !== null) {
      handleChecked(id);
    }
  };

  return !discarded ? (
    <li key={id}>
      <input type="checkbox" checked={packed} onChange={handleCheck} />
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
