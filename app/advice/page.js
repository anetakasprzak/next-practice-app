"use client";

import { useEffect } from "react";
import GoBack from "../_components/GoBack";

export default function Page() {
  async function fetchAdvice() {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();
    console.log(data);
  }

  useEffect(function () {
    fetchAdvice();
  }, []);

  return (
    <div>
      <GoBack />
      <h1>ADVICE PAGE</h1>
      <button onClick={fetchAdvice}>get advice</button>
    </div>
  );
}
