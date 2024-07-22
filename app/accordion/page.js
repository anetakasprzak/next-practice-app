"use client";

import { useState } from "react";
import GoBack from "../_components/GoBack";

const faqs = [
  {
    id: 1,
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: 2,
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: 3,
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-5 w-[500px] py-3 px-5">
      <GoBack />
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [activeId, setActiveId] = useState(null);

  const toggleFaqs = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <div className="flex flex-col gap-4">
      {data.map((el, i) => (
        <AccordionItem
          key={i}
          title={el.title}
          text={el.text}
          i={i}
          id={el.id}
          toggleFaqs={toggleFaqs}
          activeId={activeId}
        />
      ))}
    </div>
  );
}

function AccordionItem({ i, title, text, id, toggleFaqs, activeId }) {
  // const [isOpen, setIsOpen] = useState(false);
  const isActive = id === activeId;

  return (
    <div className="flex flex-col gap-2 shadow-md px-3 py-4">
      <div className="flex font-bold justify-between ">
        <div className="flex gap-3">
          <span className="opacity-60">{i < 9 ? `0${i + 1}` : i + 1}</span>
          <p>{title}</p>
        </div>
        <button onClick={() => toggleFaqs(id)} className="pr-3">
          {isActive ? "-" : "+"}
        </button>
      </div>
      {isActive && <p>{text}</p>}
    </div>
  );
}
