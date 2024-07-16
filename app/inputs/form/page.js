"use client";

import GoBack from "@/app/_components/GoBack";
import { useForm } from "react-hook-form";

export default function Page() {
  return (
    <div>
      <GoBack />
      <Form />
    </div>
  );
}

function Form() {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="first name"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span>This field is required</span>}
        </div>

        <div>
          <input
            type="text"
            placeholder="last name"
            {...register("firstName", { required: true })}
          />
          {errors.lastName && <span>This field is required</span>}
        </div>

        <div>
          <input
            type="text"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
