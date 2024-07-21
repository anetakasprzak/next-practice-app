"use client";

import { useEffect, useState } from "react";
import GoBack from "../_components/GoBack";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState([]);
  const [error, setError] = useState("");

  async function fetchAdvice() {
    try {
      setIsLoading(true);

      const res = await fetch(`https://api.adviceslip.com/advice`);
      const data = await res.json();

      setAdvice(data);
    } catch (err) {
      setError(err);
    } finally {
      setError("");
      setIsLoading(false);
    }
  }

  useEffect(function () {
    fetchAdvice();
  }, []);

  return (
    <div>
      <GoBack />
      {error && <Error />}
      {isLoading && <Loader />}
      {!isLoading && advice && (
        <div>
          <p>Advice {advice?.slip?.id}</p>
          <p>&ldquo;{advice?.slip?.advice}&ldquo;</p>
        </div>
      )}
      <button onClick={fetchAdvice}>get new advice</button>
    </div>
  );
}

function Loader() {
  return <p>Loading...</p>;
}

function Error() {
  return <p>Upps.. there was an error :(</p>;
}
