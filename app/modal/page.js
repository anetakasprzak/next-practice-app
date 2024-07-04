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
      {isModalOpen && <Modal />}
    </div>
  );
}

const Modal = () => {
  return <p>MODAL</p>;
};
