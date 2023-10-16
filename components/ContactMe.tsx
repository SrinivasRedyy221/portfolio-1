import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (FormData) => {
    window.location.href = `mailto:piserla.srinivas@gmail.com?subject=${FormData.subject}&body=Hi, my name is ${FormData.name} ${FormData.message} (${FormData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center md:space-x-10">
      <div className="uppercase tracking-[20px] text-gray-500 top-24 absolute text-2xl">
        Contact
      </div>
      
        <div className="space-y-10 pt-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className=" text-[#F7AB0A] h-7 w-7 animate-pluse " />
            <div className="text-2xl">+91 6301812407</div>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="animate-pluse text-[#F7AB0A] h-7 w-7 " />
            <div className="text-2xl">piserla.srinivas@gmail.com</div>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="animate-pluse text-[#F7AB0A] h-7 w-7 " />
            <div className="text-2xl">Hyderabad</div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full mx-auto space-y-2 pt-5">
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="ContactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="ContactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="ContactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message..."
            className="ContactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
