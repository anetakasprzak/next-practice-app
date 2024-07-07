"use client";

import { useState } from "react";
import GoBack from "../_components/GoBack";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="px-14 py-10">
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
    <div
      className="b
    lur-sm  z-0 absolute w-full h-full top-0 left-0 grid place-items-center"
    >
      <button onClick={() => setIsModalOpen(false)}>X</button>
      <div className="py-10 w-80 h-64 bg-pink-600 z-10">MODAL</div>
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
