import Link from "next/link";
import GoBack from "../_components/GoBack";

export default function Page() {
  return (
    <div className="px-14 py-10">
      <GoBack />
      <div className="flex gap-4">
        <Link href="/inputs/form">Form</Link>
        <Link href="/inputs/range">Range</Link>
      </div>
    </div>
  );
}
