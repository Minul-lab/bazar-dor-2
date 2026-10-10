"use client";

import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

const SignUp = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      redirect("/");
    }

    if (error) {
      console.error(error);
    }
  };

  const handleGoogleSignUp = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      console.error(error);
    }

    if (data) {
      console.log(data);
    }
  };

  const handleGithubSignUp = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });

    if (error) {
      console.error(error);
    }

    if (data) {
      console.log(data);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f1f5f1] px-4 py-10 text-[#171717]">
      <header className="mb-8 w-full text-center">
        <h1 className="mb-1 text-2xl font-bold tracking-tight">সাইন আপ</h1>

        <p className="text-sm text-gray-600 ">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্ট খুলুন।
        </p>
      </header>

      <form
        onSubmit={onSubmit}
        className="w-full max-w-100 rounded-[22px] border border-[#dfe6df] bg-[#fbfcfb] p-6 shadow-sm sm:p-8"
      >
        <div className="mb-3">
          <label htmlFor="name" className="mb-2 block font-medium">
            নাম
          </label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="আপনার নাম লিখুন"
            autoComplete="name"
            required
            className="h-10 w-full rounded-xl border border-[#cbd1cb] bg-transparent px-4 text-base outline-none transition focus:border-[#05893e] focus:ring-2 focus:ring-[#05893e]/15"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="mb-2 block font-medium">
            ইমেইল
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            className="h-10 w-full rounded-xl border border-[#cbd1cb] bg-transparent px-4 text-base outline-none transition focus:border-[#05893e] focus:ring-2 focus:ring-[#05893e]/15"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="mb-2 block font-medium">
            পাসওয়ার্ড
          </label>

          <input
            id="password"
            type="password"
            name="password"
            placeholder="কমপক্ষে ৮ অক্ষর"
            autoComplete="new-password"
            minLength={8}
            required
            className="h-10 w-full rounded-xl border border-[#cbd1cb] bg-transparent px-4 text-base outline-none transition focus:border-[#05893e] focus:ring-2 focus:ring-[#05893e]/15"
          />
        </div>

        <button
          type="submit"
          className="mt-1 h-10 w-full rounded-xl bg-[#05893e] text-lg font-bold text-white shadow-md transition hover:bg-[#047632] active:scale-[0.99]"
        >
          সাইন আপ
        </button>

        <div className="my-5 flex items-center gap-5">
          <div className="h-0.75 flex-1 bg-[#e3e7e3]" />
          <span className="text-base text-gray-700">অথবা</span>
          <div className="h-0.75 flex-1 bg-[#e3e7e3]" />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="flex min-0.75 items-center justify-center gap-3 rounded-xl border border-[#28312b] px-3 text-center text-base font-medium transition hover:bg-gray-100"
          >
            <FcGoogle size={20} />
            <span>
              Google দিয়ে
              <br />
              চালিয়ে যান
            </span>
          </button>

          <button
            type="button"
            onClick={handleGithubSignUp}
            className="flex min-h-10 items-center justify-center gap-3 rounded-xl border border-[#28312b] px-3 text-center text-base font-medium transition hover:bg-gray-100"
          >
            <FaGithub size={20} />
            <span>
              GitHub দিয়ে
              <br />
              চালিয়ে যান
            </span>
          </button>
        </div>

        <p className="mt-6 text-center text-base text-gray-600">
          ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
          <a
            href="/sign-in"
            className="font-medium text-[#05893e] underline underline-offset-2 hover:text-[#046b30]"
          >
            সাইন ইন করুন
          </a>
        </p>
      </form>

      <Link
        href="/"
        className="mt-7 text-base text-gray-500 underline underline-offset-2 transition hover:text-[#05893e]"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </main>
  );
};

export default SignUp;
