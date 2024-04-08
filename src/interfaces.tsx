interface itemInterface {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}
interface PackageListProps {
  itemsArray: itemInterface[];
}
interface FormProps {
  setItemArray: (itemObj: itemInterface) => void;
}
type ItemsArrayModify = ((i: number) => void) | null;
export type { itemInterface, PackageListProps, FormProps, ItemsArrayModify };
