import ItemCard from "./ItemCard";
import { PackageListProps } from "../interfaces";
import { useContext, useState } from "react";
import { DeleteItemContext } from "../context";
export default function PackingList({ itemsArray }: PackageListProps) {
  const deleteItemContext = useContext(DeleteItemContext);
  if (deleteItemContext === null) {
    throw new Error("DeleteItemContext is null");
  }
  const { emptyItem } = deleteItemContext;
  const [selectedOption, setSelectedOption] = useState("packed");
  let sortedItems;
  if (selectedOption === "input") sortedItems = itemsArray;
  else if (selectedOption === "packed")
    sortedItems = itemsArray
      .slice()
      .sort((a, b) => (a.packed === b.packed ? 0 : a.packed ? -1 : 1));
  else if (selectedOption === "description")
    sortedItems = itemsArray
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item) => (
          <ItemCard {...item} key={item.id} />
        ))}
      </ul>
      {itemsArray.length !== 0 ? (
        <>
          <button onClick={() => emptyItem()}>Clear List</button>
          <select
            value={selectedOption}
            onChange={(event) => setSelectedOption(event.target.value)}
          >
            <option value="packed">Sort by Packed Status</option>
            <option value="input">Sort by input Order</option>
            <option value="description">Sort by description</option>
          </select>
        </>
      ) : null}
    </div>
  );
}
