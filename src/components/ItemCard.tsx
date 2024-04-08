import { itemInterface } from "../interfaces";
import { useContext, useState } from "react";
import { ItemArrayModificationContext } from "../App";
export default function ItemCard({ id, quantity, description }: itemInterface) {
  const [isPacked, setIsPacked] = useState(false);
  const modifyArrayItems = useContext(ItemArrayModificationContext);
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

      <button onClick={(id) => modifyArrayItems(id)}>❌</button>
    </li>
  );
}
// import { itemInterface } from "../interfaces";
// import { useState } from "react";

// export default function ItemCard({ id, quantity, description }: itemInterface) {
//   const [isPacked, setIsPacked] = useState(false);
//   const [discarded, setDiscarded] = useState(false);

//   return !discarded ? (
//     <li key={id}>
//       <input
//         type="checkbox"
//         checked={isPacked}
//         onChange={() => setIsPacked(!isPacked)}
//       />
//       <span
//         style={
//           isPacked
//             ? { textDecoration: "line-through" }
//             : { textDecoration: "none" }
//         }
//       >
//         {quantity} {description}
//       </span>

//       <button onClick={() => setDiscarded(!discarded)}>❌</button>
//     </li>
//   ) : null;
// }
