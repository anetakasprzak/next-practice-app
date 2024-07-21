"use client";

import GoBack from "@/app/_components/GoBack";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState(0);

  const storageUsed = value;
  const storageLeft = 1000 - value;

  return (
    <div className="w-[500px] flex flex-col items-center">
      <GoBack />
      <p>
        You&apos;ve used <span className="font-semibold">{storageUsed}</span> of
        your storage
      </p>
      <input
        type="range"
        min="0"
        max="1000"
        id="storage"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-[300px]"
      />
      <div className="flex w-[300px] justify-between">
        <label htmlFor="storage">0 GB</label>
        <label htmlFor="storage">1000 GB</label>
      </div>
      {storageLeft === 0 && <p className="uppercase">no storage left</p>}
      {storageLeft > 0 && (
        <p>
          <span className="font-semibold">{storageLeft}</span> gb left
        </p>
      )}
    </div>
  );
}
