import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center  p-24 gap-5">
      <h1 className="text-cyan-600">MY EXERCISES</h1>

      <ul className="flex flex-col gap-2 bg-gray-200 py-2 px-4 border-2 border-solid border-cyan-600">
        <li className="hover:text-cyan-600">
          <Link href="/advice">Advice</Link>
        </li>
        <li className="hover:text-cyan-600">
          <Link href="/inputs">Inputs</Link>
        </li>
        <li className="hover:text-cyan-600">
          <Link href="/modal">Modal</Link>
        </li>
        <li className="hover:text-cyan-600">
          <Link href="/list">List</Link>
        </li>
        <li className="hover:text-cyan-600">
          <Link href="/textExpander">Text Expander</Link>
        </li>
        <li className="hover:text-cyan-600">
          <Link href="/dateCounter">Date Counter</Link>
        </li>
      </ul>
    </div>
  );
}
