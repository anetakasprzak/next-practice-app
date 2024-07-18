import GoBack from "../_components/GoBack";

const data = {
  title: "1914 translation by H. Rackham",
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
};

export default function Page() {
  const { title, text } = data;

  return (
    <div className="w-[40rem] flex flex-col gap-3">
      <GoBack />
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold">{title}</h1>
        <p>{text}</p>
        <button className="">button</button>
      </div>
    </div>
  );
}
