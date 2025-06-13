"use client"
interface Params {
    tip:string;
    children: React.ReactNode;
}
export default function Dugme(params:Params) {
  let name = "";

  if (params.tip === "warning") {
    name = "bg-orange-600 hever:orange-900 py-1 px-3 text-center";
  } else if (params.tip === "not-warning") {
    name = "bg-green-600";
  }

  return (
    <button
      className={name}
      onClick={() => alert("tadija smrad")}
    >
      
      {params.children}
    </button>
  );
}