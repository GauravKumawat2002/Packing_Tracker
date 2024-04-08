import ItemCard from "./ItemCard";
import { PackageListProps } from "../interfaces";

export default function PackingList({ itemsArray }: PackageListProps) {
  return (
    <div className="list">
      <ul>
        {itemsArray.map((item) => (
          <ItemCard {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
