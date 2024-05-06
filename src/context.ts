import { deleteItem, handleChecked } from "./interfaces";
import { createContext } from "react";

// Creating the context
const DeleteItemContext = createContext<deleteItem>();
const HandleCheckedContext = createContext<handleChecked>(null);

// Exporting the context
export { DeleteItemContext, HandleCheckedContext };
