import { ItemsArrayModify } from "./interfaces";
import { createContext } from "react";

export const ItemArrayModificationContext =
  createContext<ItemsArrayModify>(null);
