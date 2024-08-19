import { CardAiGenerateImagen } from "../componets/shared/cardAiGenerateImagen";
import { Galeria } from "../componets/shared/galeria";
import Header from "../componets/shared/header";
import { SidebarRight } from "../componets/shared/sidebarRight";

export default function Home() {
  return (
    <section>
      <Header />
      <div className="grid xl:grid-cols-3 xl:gap-4">
        <div className="xl:col-span-2">
          {/* <CardAiGenerateImagen /> */}
          <Galeria />
        </div>
        <div className="py-6 xl:pt-0"><SidebarRight/></div>
      </div>
    </section>
  );
}
