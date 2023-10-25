import { RiFlashlightFill } from "react-icons/ri";
import Link from "next/link";
import { cn } from "@/app/libs/utils";


const BotonPro = () => {
    
  return (
    <section className="px-2">
      <div className="bg-[#343373] rounded-3xl p-1 w-full ">
        <Link
          href="/"
          className={cn('flex justify-start items-center gap-2 text-white ')}
        >
          <span className="bg-primary rounded-full p-2">
            <RiFlashlightFill
              size={25}
              className="text-white"
            />
          </span>
          Upgrade to Pro
        </Link>
      </div>
    </section>
  );
};

export default BotonPro;
