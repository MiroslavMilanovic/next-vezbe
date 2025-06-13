interface Params {
    tip:string;
    children: React.ReactNode;
    onClick?: () => void;
}
export default function Dugme({tip, children, onClick}:Params) {
  let name = "";

  if (tip === "warning") {
    name = "bg-orange-600 hover:bg-sky-700 py-1 px-3 text-center";
  } else if (tip === "not-warning") {
    name = "bg-green-600 hover:bg-orange-700 py-1 px-3 text-center";
  }

  return (
    <button
      className={name}
      onClick={onClick}
    >
      
      {children}
    </button>
  );
}