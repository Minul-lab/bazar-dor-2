"use client";

import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import Link from "next/link";
import { toast , Bounce } from "react-toastify";

const UserInfo = () => {
  const session = authClient.useSession();
  const user = session.data?.user;

  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    toast.warning("সফলভাবে সাইন আউট করেছেন!", {
      position: "top-center",
      transition: Bounce,
    });
    await authClient.signOut();
    setIsOpen(false);
  };
  

  return (
    <div className="relative">
      {user ? (
        <>
          {/* Profile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-gray-100"
          >
            {/* Avatar */}
            <span className="flex h-7 w-12 items-center justify-center rounded-full bg-[#05893E] text-lg font-bold text-white">
              {user.name?.charAt(0).toUpperCase() || "U"}
            </span>

            <span className="font-medium text-[#26332B]">{user.name}</span>

            <span className="text-xs text-gray-500">{isOpen ? "▴" : "▾"}</span>
          </button>

          {/* Dropdown */}
          {isOpen && (
            <>
              {/* Close when clicking outside */}
              <button
                aria-label="Close profile menu"
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-40 cursor-default"
              />

              <div className="absolute right-0 top-full z-50 mt-3 w-[335px] max-w-[calc(100vw-2rem)] rounded-[22px] border border-gray-200 bg-[#FAFCFA] p-6 shadow-xl">
                {/* User Details */}
                <div className="mb-4">
                  <p className="truncate text-lg font-semibold text-gray-500">
                    {user.name}
                  </p>

                  <p className="truncate text-sm text-gray-400">{user.email}</p>
                </div>

                {/* Profile Link */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = "/profile";
                  }}
                  className="flex w-full items-center gap-3 py-2 text-left text-lg text-[#26332B] transition hover:text-[#05893E]"
                >
                  <span>👤</span>
                  <span>আমার প্রোফাইল</span>
                </button>

                {/* Sign Out */}
                <button
                  onClick={handleSignOut}
                  className="mt-2 flex w-full items-center gap-2 py-1 text-left text-lg text-red-500 transition hover:text-red-700"
                >
                  <span>↪</span>
                  <span>সাইন আউট</span>
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        /* Logged Out */
        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <button
              
              className="text-gray-700 transition hover:text-[#05893E]"
            >
              সাইন ইন
            </button>
          </Link>

          <Link href="/sign-up">
            <button className="rounded bg-[#05893E] px-3 py-2 text-sm text-white transition hover:bg-[#047333]">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;

