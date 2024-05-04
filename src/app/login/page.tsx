"use client";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import React from "react";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";

import Link from "next/link";

const LoginPage: NextPage = () => {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm();
  const submit = (data: any) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((res) => {
      console.log(res);
    });
    router.push('/')
  };
  return (
    <div className="md:py-[5%] pb-16 pt-4 flex items-center">
      <form
        onSubmit={handleSubmit(submit)}
        className="md:w-[500px] w-[320px] mx-auto bg-white md:p-10 p-4 rounded-[6px]"
      >
        <h2 className="text-thrid font-extrabold text-2xl text-center md:mb-6 mb-1">
          Kirish
        </h2>
        <p className="text-secondary font-normal text-sm text-center mb-7">
          Kirish uchun kerakli maydonlarni to‘ldiring
        </p>
        <div className="mb-6">
          <label className="text-secondary font-semibold text-sm mb-2">
            Telefon raqam/Elektron pochta
          </label>
          <input
            {...register("email")}
            className="bg-[#EFF3F8] border border-[#F6F8FA] rounded-[6px] w-full h-[36px] md:h-[48px] outline-primary"
            type="text"
          />
        </div>
        <div className="mb-8">
          <label className="text-secondary font-semibold text-sm mb-2">
            Parolni kiriting
          </label>

          <input
            {...register("password")}
            className="bg-[#EFF3F8] border border-[#F6F8FA] rounded-[6px] w-full h-[36px] md:h-[48px] outline-primary"
            type="password"
          />
        </div>
        <Button
          variant="primary"
          type={"submit"}
          className={"w-full rounded-[6px] md:py-3 py-2 md:mb-6 mb-2"}
        >
          send
        </Button>
        <Button
          variant="outline"
          className={
            "md:py-3 py-2 w-full border-[2px] border-[#000000] rounded-[6px] text-secondary font-semibold text-base"
          }
        >
          <Link href={'/register'}>Ro‘yxatdan o‘tish</Link>
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
