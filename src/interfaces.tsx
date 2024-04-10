export interface itemInterface {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}
interface FormProps {
  setItemArray: (itemObj: itemInterface) => void;
  packedItem: boolean;
}
interface PackageListProps {
  itemsArray: itemInterface[];
}
interface StatsProps {
  itemsArray: itemInterface[];
}

type ItemsArrayModify = ((i: number) => void) | null;

export type { FormProps, PackageListProps, StatsProps, ItemsArrayModify };
