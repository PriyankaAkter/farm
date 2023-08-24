'use client'
import ButtonOne from "@/website/components/shared/ButtonOne";
import { useForm } from "react-hook-form";

const Form = () => {
  const form = useForm()
  const {register,handleSubmit, formState} = form
  const {errors} = formState
  const onSubmit=(data)=>{
    console.log("Form Submitted",data);
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <div>
          <input type="text" id="username" {...register("username",{required:{
            value: true,
            message: "Username is required"
          }})} className="border border-primary w-full" />
        </div>
        <p className="text-red-500">{errors.username?.message}</p>

        <label htmlFor="email">Email</label>
        <div>
          <input type="email" id="email" {...register("email",{pattern:{
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email Formet"
          }})} className="border border-primary w-full" />
        </div>
        <p className="text-red-500">{errors.email?.message}</p>

        <label htmlFor="channel">channel</label>
        <div>
          <input type="text" id="channel" {...register("channel",{required:{
            value: true,
            message: "Channel is required"
          }})} className="border border-primary w-full" />
        </div>
        <p className="text-red-500">{errors.channel?.message}</p>

        <button>Submit</button>
      </form>
      
    </div>
  );
};

export default Form;
