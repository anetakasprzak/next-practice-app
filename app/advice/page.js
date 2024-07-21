"use client";

import { useEffect, useState } from "react";
import GoBack from "../_components/GoBack";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState([]);
  const [error, setError] = useState("");

  async function fetchAdvice() {
    try {
      setError("");
      setIsLoading(true);

      const res = await fetch(`https://api.adviceslip.com/advice`);
      const data = await res.json();

      setAdvice(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    fetchAdvice();
  }, []);

  return (
    <div className="h-max w-[700px] flex flex-col items-center gap-8">
      <GoBack />
      {error && <Error />}
      {isLoading && <Loader />}
      {!isLoading && advice && !error && (
        <div className="bg-gray-600 flex flex-col items-center gap-2 py-3 px-4">
          <p className="text-gray-50">Advice {advice?.slip?.id}</p>
          <p className="text-gray-50">&ldquo;{advice?.slip?.advice}&ldquo;</p>
        </div>
      )}
      <button onClick={fetchAdvice} className="hover:text-blue-800">
        get new advice
      </button>
    </div>
  );
}

function Loader() {
  return <p className="">Loading...</p>;
}

function Error() {
  return <p>Upps.. there was an error..</p>;
}
