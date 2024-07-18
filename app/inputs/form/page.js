"use client";

import GoBack from "@/app/_components/GoBack";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <div className="flex flex-col gap-6 items-center mt-20">
      <GoBack />
      {!showSuccessMessage && (
        <Form
          setShowSuccessMessage={setShowSuccessMessage}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
        />
      )}
      {showSuccessMessage && (
        <SuccessMessage
          firstName={firstName}
          lastName={lastName}
          email={email}
        />
      )}
    </div>
  );
}

function Form({ setShowSuccessMessage, setFirstName, setLastName, setEmail }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setShowSuccessMessage(true);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="first name"
            {...register("firstName", { required: true })}
            className="border border-blue-800 px-1"
          />
          {errors.firstName && (
            <span className="text-xs text-red-600">This field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="last name"
            {...register("lastName", { required: true })}
            className="border border-blue-800 px-1"
          />
          {errors.lastName && (
            <span className="text-xs text-red-600">This field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            placeholder="email"
            {...register("email", { required: true })}
            className="border border-blue-800 px-1"
          />
          {errors.email && (
            <span className="text-xs text-red-600">This field is required</span>
          )}
        </div>

        <button
          type="submit"
          className="hover:text-green-600 border hover:border-green-600"
        >
          submit
        </button>
      </form>
    </div>
  );
}

function SuccessMessage({ firstName, lastName, email }) {
  function toTitleCase(str) {
    const strArr = str.toLowerCase().split("");
    strArr[0] = strArr[0].toUpperCase();
    const newStr = strArr.join("");
    return newStr;
  }

  return (
    <div className="bg-orange-300 p-5 rounded-[5px]">
      <p className="flex gap-2">
        <span>Thank you</span>
        <span className="font-semibold">
          {toTitleCase(firstName)} {toTitleCase(lastName)}
        </span>
      </p>
      <p>We sent confirmation on: {email}</p>
    </div>
  );
}
