import Image from "next/image";

export const Galeria = () => {
  return (
    <section className="py-6">
      <div className="bg-graylight lg:p-6 p-2 rounded-2xl">
        <h2 className="text-white p-4">Related Imagen</h2>
        <div className="flex flex-wrap  gap-4 pt-4 justify-center items-center ">
          <Image
            src="https://img.freepik.com/free-photo/cartoon-character-with-handbag-sunglasses_71767-99.jpg?size=626&ext=jpg&ga=GA1.1.1481528647.1685589990&semt=ais"
            alt="Photo 3D"
            width={300}
            height={200}
            className="object-fill rounded-lg hover:brightness-50 hover:transition-colors hover:duration-300"
          />
          <Image
            src="https://img.freepik.com/free-photo/leopard-with-leather-jacket-leather-jacket-stands-front-street_1340-39338.jpg?size=626&ext=jpg&ga=GA1.1.1481528647.1685589990&semt=ais"
            alt="Photo 3D"
            width={300}
            height={200}
            className="object-fill rounded-lg hover:brightness-50 hover:transition-colors hover:duration-300"
          />
          <Image
            src="https://img.freepik.com/free-photo/fashion-little-boy_71767-95.jpg?size=626&ext=jpg&ga=GA1.1.1481528647.1685589990&semt=ais"
            alt="Photo 3D"
            width={300}
            height={200}
            className="object-fill rounded-lg hover:brightness-50 hover:transition-colors hover:duration-300"
          />
          <Image
            src="https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg?size=626&ext=jpg&ga=GA1.1.1653919966.1698258851&semt=ais"
            alt="Photo 3D"
            width={300}
            height={200}
            className="object-fill rounded-lg hover:brightness-50 hover:transition-colors hover:duration-300"
          />
          <Image
            src="https://img.freepik.com/free-photo/robot-with-helmet-that-says-robot-it_1340-38052.jpg?size=626&ext=jpg&ga=GA1.1.1653919966.1698258851&semt=ais"
            alt="Photo 3D"
            width={300}
            height={200}
            className="object-fill rounded-lg hover:brightness-50 hover:transition-colors hover:duration-300"
          />
          <Image
            src="https://img.freepik.com/free-photo/woman-with-gold-helmet-gold-head-with-word-star-it_1340-39434.jpg?size=626&ext=jpg&ga=GA1.1.1653919966.1698258851&semt=ais"
            alt="Photo 3D"
            width={300}
            height={200}
            className="object-fill rounded-lg hover:brightness-50 hover:transition-colors hover:duration-300"
          />
        </div>
      </div>
    </section>
  );
};
