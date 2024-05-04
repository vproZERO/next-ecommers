"use client";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import { Button } from "@/components/button";

const RegisterPage: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const submit = (data: any) => {
    axios.post("http://localhost:5000/register", data).then((res) => {
      console.log(res);

      router.push("/login");
    });
  };
  return (
    <div className="md:py-[3%] pt-5 pb-20 flex items-center">
      <div className="md:w-[500px] w-[320px] mx-auto bg-white rounded-[6px] p-4 md:p-[40px]">
        <h2 className="text-thrid font-extrabold text-2xl text-center md:mb-6 mb-1">
          Ro‘yxatdan o‘tish
        </h2>
        <p className="text-secondary font-normal text-sm text-center mb-7">
          Kirish uchun kerakli maydonlarni to‘ldiring
        </p>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-6">
            <label className="text-secondary font-semibold text-sm mb-2">
              Ismi (majburiy)
            </label>
            <input
              {...register("name")}
              className="bg-[#EFF3F8] border border-[#F6F8FA] rounded-[6px] w-full h-[36px] md:h-[48px] outline-primary"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label className="text-secondary font-semibold text-sm mb-2">
              Elektron pochta
            </label>
            <input
              {...register("email")}
              className="bg-[#EFF3F8] border border-[#F6F8FA] rounded-[6px] w-full h-[36px] md:h-[48px] outline-primary"
              type="text"
            />
          </div>
          <div className="mb-8">
            <label className="text-secondary font-semibold text-sm mb-2">
              Parol
            </label>
            <input
              {...register("password")}
              className="bg-[#EFF3F8] border border-[#F6F8FA] rounded-[6px] w-full h-[36px] md:h-[48px] outline-primary"
              type="text"
            />
          </div>
          <Button
          variant="primary"
          type={"submit"}
          className={"w-full rounded-[6px] md:py-3 py-2 mb-6"}
        >
          Tasdiqlang
        </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
