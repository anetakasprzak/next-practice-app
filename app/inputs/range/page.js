"use client";

import GoBack from "@/app/_components/GoBack";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState(0);

  const storageUsed = value;
  const storageLeft = 1000 - value;

  return (
    <div>
      <GoBack />
      <p>
        You&apos;ve used <span>{storageUsed}</span> of your storage
      </p>
      <input
        type="range"
        min="0"
        max="1000"
        id="storage"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>
        <label htmlFor="storage">0 GB</label>
        <label htmlFor="storage">1000 GB</label>
      </div>
      {storageLeft === 0 && <p>NO STORAGE LEFT</p>}
      {storageLeft > 0 && (
        <p>
          <span>{storageLeft}</span> gb left
        </p>
      )}
    </div>
  );
}
