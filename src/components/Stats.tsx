import { StatsProps } from "../interfaces";
export default function Stats(StatsProps: StatsProps) {
  const totalItems = StatsProps.itemsArray.length;
  return (
    <footer className="stats">
      {totalItems === 0
        ? "Start adding some items to your packing list 🚀"
        : "You have completed ({value}/100%) of your packing"}
    </footer>
  );
}
// {value} --> yha pr ek value compute hokr aayegi jo ek function se compute hogi us function ka kaam hoga ki jb checkbox click hoga to wo count+1 krdega aur us count k basis pe totalItems ki length se percentage calculate hogi
