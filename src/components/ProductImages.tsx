"use client";

import { url } from "inspector";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/27640372/pexels-photo-27640372/free-photo-of-woman-in-suit-standing-in-greenhouse.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/27702855/pexels-photo-27702855/free-photo-of-amigo.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/27367758/pexels-photo-27367758/free-photo-of-a-woman-in-a-blue-dress-and-black-shoes-is-walking-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/27540341/pexels-photo-27540341/free-photo-of-a-woman-in-a-white-dress-is-standing-next-to-a-horse.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
//   },
// ];

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item:any, i:number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
