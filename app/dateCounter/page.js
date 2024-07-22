import GoBack from "../_components/GoBack";

export default function Page() {
  return (
    <div>
      <GoBack />
      <h1>DATE COUNTER</h1>
      <div>
        <button>-</button>
        <span>Step: X</span>
        <button>+</button>
      </div>

      <div>
        <button>-</button>
        <span>Count: X</span>
        <button>+</button>
      </div>

      <p>
        <span>Today is...</span>
        <span>date</span>
      </p>
      <button>reset</button>
    </div>
  );
}
