"use client";

import Image from "next/image";
import BotonMorado from "./ui/botonMorado";
import BotonTransparent from "./ui/botonTranparent";

export const CardAiGenerateImagen = () => {
  return (
    <section className="pt-6 xl:pt-0">
      <div className="bg-graylight xl:p-6 md:p-4 p-2 rounded-xl xl:flex gap-4  text-center xl:text-left">
        <Image
          src="https://img.freepik.com/premium-photo/cartoon-panther-mascot-smiley-face-white-background_917664-21233.jpg?w=826"
          alt="Panther"
          width={300}
          height={300}
          className="rounded-xl hover:brightness-50 hover:transition-colors hover:duration-300 md:w-auto md:h-auto mx-auto xl:w-80"
        />
        <div>
          <h1 className="text-xl text-white tracking-wider pt-4 xl:pt-0">
            Black Panther Chibi
          </h1>
          <p className="text-sm pt-10">Caption</p>
          <h3 className="text-gray-300 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            beatae doloribus, eligendi tenetur, nulla accusamus totam aperiam
            voluptatibus dolorum nihil. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae beatae doloribus, eligendi tenetur.
          </h3>
          <section className="md:flex gap-36 pt-10 justify-center xl:justify-start">
            <div>
              <p className="text-sm">Seed</p>
              <p className="text-sm pt-2 text-gray-300">762122</p>
              <p className="text-sm pt-4">Sampler</p>
              <p className="text-sm pt-2 text-gray-300">pmls</p>
            </div>
            <div>
              <p className="text-sm">Guidance Scale</p>
              <p className="text-sm pt-2 text-gray-300">8</p>
              <p className="text-sm pt-4">Model</p>
              <p className="text-sm pt-2 text-gray-300">Stable Diffusion 2.5</p>
            </div>
          </section>
          <div className="flex flex-wrap md:gap-20 xl:gap-2 flex-col md:flex-row md:justify-center xl:justify-start items-center justify-center  pb-6 md:pb-0">
            <BotonMorado label="Download" />
            <BotonTransparent
              label="Copy"
              className="px-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
