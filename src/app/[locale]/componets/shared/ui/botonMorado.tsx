import { cn } from "@/app/[locale]/libs/utils";
import { RiDownload2Line } from "react-icons/ri";

interface BotonProps {
  label: string;
  className?: string;
}

const BotonMorado = ({ label, className }: BotonProps) => {
  return (
    <div className="pt-10">
      <button
        type="button"
        className={cn(
          "bg-primary px-10 py-2 rounded-3xl flex items-center text-white gap-2 text-base hover:bg-graylight hover:ring-1 hover:ring-white hover:ring-inset hover:transition-all hover:duration-300",
          className
        )}
      >
        <RiDownload2Line size={20} />
        {label}
      </button>
    </div>
  );
};

export default BotonMorado;
