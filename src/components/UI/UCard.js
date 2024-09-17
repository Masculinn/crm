import { Image } from "@nextui-org/react";
import Link from "next/link";
import { Trailed } from "../animated-components/Trailed";

export const UCard = ({ href, name, img, data }) => {
  const banner = data.meta.about.slice(0, 115);

  return (
    <li className="w-full mx-auto group max-w-sm list-none lg:px-0 px-4">
      <Trailed isOpen noBounce>
        <Link href={href}>
          <Image
            src={img}
            loading="lazy"
            alt={name + " | Olymposedu"}
            className="w-full rounded-lg"
          />
          <div className="mt-3 space-y-2">
            <h2 className="lg:text-3xl text-xl lg:font-extrabold font-bold tracking-tighter text-gray-800 duration-150 group-hover:text-sky-600">
              {name}
            </h2>
            <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
              {banner}...
            </p>
          </div>
        </Link>
      </Trailed>
    </li>
  );
};
