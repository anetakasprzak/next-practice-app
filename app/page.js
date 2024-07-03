import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>HOME PAGE</h1>

      <ul>
        <li>
          <Link href="/advice">Advice</Link>
        </li>
        <li>
          <Link href="/inputs">Inputs</Link>
        </li>
        <li>
          <Link href="/modal">Modal</Link>
        </li>
      </ul>
    </div>
  );
}
