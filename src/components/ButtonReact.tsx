import { useState } from "react";

export default function ButtonReact() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button
        className="bg-teal-400 p-2"
        onClick={() => setCounter(counter + 1)}
      >
        Count!
      </button>
      <p>{counter}</p>
    </>
  );
}
