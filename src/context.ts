import { ItemsArrayModify } from "./interfaces";
import { createContext } from "react";

const ItemArrayModificationContext = createContext<ItemsArrayModify>(null);

const SetPackedItemContext = createContext<((val: boolean) => void) | null>(
  null
);

export { ItemArrayModificationContext, SetPackedItemContext };
