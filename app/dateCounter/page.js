"use client";

import { useState } from "react";
import GoBack from "../_components/GoBack";

export default function Page() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  console.log(step, count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <GoBack />
      <h1>DATE COUNTER</h1>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>Today is...</span>
        <span>date</span>
      </p>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
