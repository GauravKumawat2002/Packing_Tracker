/* eslint-disable react-refresh/only-export-components */
interface itemInterface {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}
interface FormProps {
  setItemArray: (itemObj: itemInterface) => void;
}
interface PackageListProps {
  itemsArray: itemInterface[];
}
interface StatsProps {
  itemsArray: itemInterface[];
}

type deleteItem = ((i: number) => void) | null;
type handleChecked = ((i: number) => void) | null;

export type {
  itemInterface,
  FormProps,
  PackageListProps,
  StatsProps,
  deleteItem,
  handleChecked,
};
