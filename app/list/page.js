"use client";

import { useState } from "react";
import GoBack from "../_components/GoBack";

export default function Page() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: items.length + 1,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItem) return;

    addItem(newItem);
    console.log(newItem);
    setNewItem("");
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
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button>add</button>
      </form>
      <ul>
        {items?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
