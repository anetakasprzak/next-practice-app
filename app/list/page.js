"use client";

import { useState } from "react";
import GoBack from "../_components/GoBack";

export default function Page() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: itemName,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItemName) return;

    addItem(newItemName);
    console.log(newItemName);
    setNewItemName("");
  };

  return (
    <div>
      <GoBack />
      <h1 className="uppercase">shopping list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="shopping"
          placeholder="Add item..."
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button>add</button>
      </form>
      <ul></ul>
    </div>
  );
}
