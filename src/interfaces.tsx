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

type deleteItem = {
  deleteItem: (i: number) => void;
  emptyItem: () => void;
};
type handleChecked = ((i: number) => void) | null;

export type {
  itemInterface,
  FormProps,
  PackageListProps,
  StatsProps,
  deleteItem,
  handleChecked,
};
