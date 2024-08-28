import Image from "next/image";
import { RiRocketLine } from "react-icons/ri";

export const SidebarRight = () => {
  return (
    <div className=" bg-graylight xl:p-6 p-4 sm:px-20  pt-10">
      {/* <div className="bg-white/10 w-full p-1 rounded-3xl flex flex-wrap items-center justify-between">
        <button className="focus:bg-white  lg:py-3 px-8 py-2 w-[50%]  focus:rounded-3xl focus:text-black">
          Custom
        </button>
        <button className="focus:bg-white  lg:py-3 px-8 py-2 w-[50%] focus:rounded-3xl focus:text-black">
          Guided
        </button>
      </div> */}
      <div className=" pt-10">
        <p
          id="message"
          className="pb-2"
        >
          Describe your image
        </p>
        <textarea
          name="message"
          id="message"
          placeholder="write your description"
          className="bg-white/10 border-none bg-graylight ring-1 ring-gray-500 text-white rounded px-2 pt-2 h-10 w-full appearance-none focus:outline-none resize-none"
        ></textarea>
      </div>
      <div className=" pt-2">
        {/* <p
          id="message"
          className="pb-2"
        >
          What you "DON'T" want the photo
        </p>
        <textarea
          name="message"
          id="message"
          placeholder="What you don't want the photo"
          className="bg-white/10 border-none bg-graylight ring-1 ring-gray-500 text-white rounded px-2 pt-2 h-10 w-full appearance-none focus:outline-none resize-none"
        ></textarea> */}
        <div className="pt-2">
          <p className="pb-2">Imagen Ratio</p>
          <div className="flex items-end gap-4">
            {/* <span className="border border-gray-500 rounded w-14 h-16 flex items-center justify-center hover:border-primary bg-white/10 text-white">
              4:5
            </span> */}
            <span className="border border-gray-500 rounded w-12 h-14 flex items-center justify-center hover:border-primary bg-white/10 text-white">
              2:3
            </span>
            <span className="border border-gray-500 rounded w-12 h-12 flex items-center justify-center hover:border-primary bg-white/10 text-white">
              1:1
            </span>
            <span className="border border-gray-500 rounded w-16 h-12 flex items-center justify-center hover:border-primary bg-white/10 text-white">
              16:9
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="py-2">Number of Image</p>
        <div className="flex gap-4">
          <span className="border border-gray-500 px-4 py-2 rounded bg-white/10 hover:border-primary text-white">
            1
          </span>
          <span className="border border-gray-500 px-4 py-2 rounded bg-white/10 hover:border-primary text-white">
            2
          </span>
          <span className="border border-gray-500 px-4 py-2 rounded bg-white/10 hover:border-primary text-white">
            3
          </span>
          <span className="border border-gray-500 px-4 py-2 rounded bg-white/10 hover:border-primary text-white">
            4
          </span>
          <span className="border border-gray-500 px-4 py-2 rounded bg-white/10 hover:border-primary text-white">
            5
          </span>
        </div>
        {/* <div>
          <p className="py-2">Imagen type</p>
          <div className="flex gap-4">
            <div>
              <Image
                src="https://img.freepik.com/free-photo/view-3d-man-taking-selfie_23-2150709936.jpg?size=626&ext=jpg&ga=GA1.1.1653919966.1698258851&semt=ais"
                alt="Imagen type"
                width={100}
                height={100}
                className="rounded hover:ring hover:ring-primary hover:brightness-50 hover:transition-colors hover:duration-300"
              />
              <p className="pt-1 text-center">3D Imagen</p>
            </div>
            <div>
              <Image
                src="https://img.freepik.com/free-photo/girl-with-pink-hair-guitar-her-hands_1340-32646.jpg?size=626&ext=jpg&ga=GA1.1.1653919966.1698258851&semt=sph"
                alt="Imagen type"
                width={100}
                height={100}
                className="rounded hover:ring hover:ring-primary hover:brightness-50 hover:transition-colors hover:duration-300"
              />
              <p className="pt-1 text-center">Anime</p>
            </div>
            <div>
              <Image
                src="https://img.freepik.com/free-photo/woman-with-face-painted-with-gold-blue-paint-gold-crown_1340-38685.jpg?size=626&ext=jpg&ga=GA1.1.1653919966.1698258851&semt=ais"
                alt="Imagen type"
                width={100}
                height={100}
                className="rounded hover:ring hover:ring-primary hover:brightness-50 hover:transition-colors hover:duration-300"
              />
              <p className="pt-1 text-center">Realistic</p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="lg:pt-20 pt-10 pb-6">
        <button
          type="submit"
          className="bg-primary py-2 px-6 rounded-full w-full text-white hover:bg-transparent hover:ring-1 hover:ring-white flex gap-4 items-center justify-center "
        >
          <span>
            <RiRocketLine size={25} />
          </span>
          Generate Image
        </button>
      </div>
    </div>
  );
};
