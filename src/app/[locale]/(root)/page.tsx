import { CardAiGenerateImagen } from "../componets/shared/cardAiGenerateImagen";
import { Galeria } from "../componets/shared/galeria";
import Header from "../componets/shared/header";
import { SidebarRight } from "../componets/shared/sidebarRight";

export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row gap-4">
      <div className="xl:w-1/3">
        <SidebarRight/>
      </div>
      <div className="xl:w-2/3">
        <Galeria />
      </div>
    </div>
  );
}