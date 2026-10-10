"use client";

import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link"

const SignIn = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      console.log(data);
    }

    if (error) {
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) console.error(error);
    if (data) console.log(data);
  };

  const handleGithubSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });

    if (error) console.error(error);
    if (data) console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f1f5f1] px-4 py-10 text-[#171717]">
      <header className="mb-4 w-full text-center">
        <h1 className="mb-1 text-2xl font-bold tracking-tight">সাইন ইন</h1>

        <p className=" text-gray-600 text-sm">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </header>

      <form
        onSubmit={onSubmit}
        className="w-full max-w-100 rounded-[22px] border border-[#dfe6df] bg-[#fbfcfb] p-6 shadow-sm sm:p-8"
      >
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
          <label htmlFor="password" className="mb-2 block  font-medium">
            পাসওয়ার্ড
          </label>

          <input
            id="password"
            type="password"
            name="password"
            placeholder="কমপক্ষে ৮ অক্ষর"
            autoComplete="current-password"
            required
            className="h-10 w-full rounded-xl border border-[#cbd1cb] bg-transparent px-4 text-base outline-none transition focus:border-[#05893e] focus:ring-2 focus:ring-[#05893e]/15"
          />
        </div>

        <button
          type="submit"
          className="mt-1 h-13 w-full rounded-xl bg-[#05893e] text-lg font-bold text-white shadow-md transition hover:bg-[#047632] active:scale-[0.99]"
        >
          সাইন ইন
        </button>

        <div className="my-5 flex items-center gap-5">
          <div className="h-0.75 flex-1 bg-[#e3e7e3]" />
          <span className="text-base text-gray-700">অথবা</span>
          <div className="h-0.75 flex-1 bg-[#e3e7e3]" />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex min-h-13.5 items-center justify-center gap-3 rounded-xl border border-[#28312b] px-3 text-center text-base font-medium transition hover:bg-gray-100"
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
            onClick={handleGithubSignIn}
            className="flex min-h-13.5 items-center justify-center gap-3 rounded-xl border border-[#28312b] px-3 text-center text-base font-medium transition hover:bg-gray-100"
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
          অ্যাকাউন্ট নেই?{" "}
          <a
            href="/sign-up"
            className="font-medium text-[#05893e] underline underline-offset-2 hover:text-[#046b30]"
          >
            সাইন আপ করুন
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

export default SignIn;
