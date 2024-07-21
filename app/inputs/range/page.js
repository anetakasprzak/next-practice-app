import GoBack from "@/app/_components/GoBack";

export default function Page() {
  return (
    <div>
      <GoBack />
      <p>
        You&apos;ve used <span>X</span> of your storage
      </p>
      <input type="range" min="0" max="1000" id="storage" />
      <div>
        <label htmlFor="storage">0 GB</label>
        <label htmlFor="storage">1000 GB</label>
      </div>
      <p>
        <span>X</span> gb left
      </p>
    </div>
  );
}
