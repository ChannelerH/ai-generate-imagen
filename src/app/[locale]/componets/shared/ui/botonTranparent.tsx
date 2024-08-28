import { cn } from "@/app/[locale]/libs/utils";
import { RiFileCopyLine } from "react-icons/ri";


interface BotonProps {
    label: string;
    className?: string;
    
}

const BotonTransparent = ({label, className}: BotonProps ) => {
  return (
    <div className="pt-10">
      <button
        type="button"
        className={cn("border px-10 py-2 rounded-3xl flex items-center text-white gap-2 text-base hover:bg-primary hover:border-transparent",
         className)}
      >
        <RiFileCopyLine size={20}/>
        {label}
      </button>
    </div>
  );
};

export default BotonTransparent;