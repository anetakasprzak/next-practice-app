import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-cyan-700">HOME PAGE 2</h1>

      <ul className="">
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
