import { CircleBox } from "./circle-component";

interface Params{
    title: string;
    icon: React.ReactNode;
    type: "prva" | "druga" | "treca";
    className?: string;
    children?: React.ReactNode;
}
export default function CaseStudyCard({title, icon, type, className}:Params){
    return(
        <div className={`${className} + bg-[#202020] p-4 pl-6 rounded-tl-[40px] rounded-br-[40px]`}>
            <div className="flex items-center h-[70px]">
                <CircleBox className="border-white border-2 rounded-full flex-1 h-full m-1 mr-8"></CircleBox>
                <div className="flex-2 text-[#E0E0F0] text-xl">Kul naziv za projekat</div>
            </div>
            <div className="text-[#E0E0F0] mt-10 mb-10 text-sm">Mi smo toliko jaki, da smo ovim projektom povecali likvidnost, permutaciju i varijaciju ove firme za 1%
            </div>
        </div>
    )
}