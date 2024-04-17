import { StatsProps } from "../interfaces";
export default function Stats({ itemsArray }: StatsProps) {
  const totalItems = itemsArray.length;
  const count = itemsArray.filter((item) => item.packed === true).length;
  return (
    <footer className="stats">
      {totalItems === 0
        ? "Start adding some items to your packing list 🚀"
        : `You have ${totalItems} items. And you have completed 
        ${Math.round((count * 100) / totalItems)}% of your packing`}
    </footer>
  );
}
