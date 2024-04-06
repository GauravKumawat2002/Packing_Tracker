import Item from "./Item";

export interface items {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

// const initialItems: items[] = [
//   //   { id: 1, description: "Passports", quantity: 2, packed: true },
//   //   { id: 2, description: "Socks", quantity: 12, packed: false },
//   //   { id: 3, description: "Underwear", quantity: 12, packed: false },
//   //   { id: 4, description: "T-Shirts", quantity: 5, packed: false },
//   //   { id: 5, description: "Panties", quantity: 3, packed: false },
//   //   { id: 6, description: " bra  ", quantity: 2, packed: false },
// ];

export default function PackingList({ itemsArray }: { itemsArray: items[] }) {
  return (
    <div className="list">
      <ul>
        {itemsArray.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
