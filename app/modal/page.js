"use client";

import { useState } from "react";
import GoBack from "../_components/GoBack";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="px-14 py-10 relative">
      <GoBack />
      {!isModalOpen ? (
        <button onClick={() => setIsModalOpen(true)}>open modal</button>
      ) : (
        <button onClick={() => setIsModalOpen(false)}>close modal</button>
      )}
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

const Modal = ({ setIsModalOpen }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="overlay" />

      <div className="p-20 w-[800px] h-[600px] bg-pink-600 z-2 relative rounded-md">
        <div className="flex justify-between gap-4 relative">
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apso;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <button
            className="bg-slate-50 w-[24px] h-[24px] p-4 flex items-center justify-center cursor-pointer rounded-full absolute right-[-50px] top-[-50px]"
            onClick={() => setIsModalOpen(false)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

// const fruits = ["Banana", "Orange", "Lemon"];
// const citrus = fruits.slice(0, 1);
// console.log(fruits);
// console.log(citrus);
//fruits.slice(-1);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toSpliced(2, 3, "Lemon", "Kiwi"));

// const months = ["Jan", "Feb", "Mar", "Apr"];
// console.log(months.toSorted().toReversed());

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find((value) => value > 18);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(first);
