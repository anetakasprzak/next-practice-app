import Link from "next/link";

export default function GoBack() {
  return (
    <Link
      href="/"
      className="gap-1 uppercase transition-all hover:text-red-700 flex "
    >
      <span>&larr;</span>
      <p>go back</p>
    </Link>
  );
}
