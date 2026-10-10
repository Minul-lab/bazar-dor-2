"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const currentName = session?.user?.name ?? "";
  const email = session?.user?.email ?? "";

  const handleUpdateName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setIsSaving(true);

    try {
      const { error } = await authClient.updateUser({
        name: name.trim(),
      });

      if (error) {
        setMessage(error.message ?? "নাম আপডেট করা যায়নি।");
      } else {
        setMessage("নাম সফলভাবে আপডেট হয়েছে।");
      }
    } catch {
      setMessage("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      setMessage(error.message ?? "সাইন আউট করা যায়নি।");
      return;
    }

    window.location.href = "/sign-in";
  };

  if (isPending) {
    return (
      <main className="min-h-screen bg-[#f1f5f1] px-4 py-8">
        <div className="mx-auto max-w-5xl text-sm text-gray-600">
          প্রোফাইল লোড হচ্ছে...
        </div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="min-h-screen bg-[#f1f5f1] px-4 py-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#dfe6df] bg-[#fbfcfb] p-5">
          <p className="text-sm text-gray-700">
            প্রোফাইল দেখতে প্রথমে সাইন ইন করুন।
          </p>
          <a
            href="/sign-in"
            className="mt-3 inline-block rounded-lg bg-[#05893e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#047632]"
          >
            সাইন ইন
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f1f5f1] px-4 py-8 text-[#171717]">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">আমার প্রোফাইল</h1>
          <p className="mt-1 text-sm text-gray-600">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </header>

        <section className="mb-6 flex flex-col gap-4 rounded-2xl border border-[#dfe6df] bg-[#fbfcfb] p-5 sm:flex-row sm:items-center">
          <div className="flex min-w-0 flex-1 items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#05893e] text-xl font-medium text-white">
              {(currentName || email || "U").charAt(0).toUpperCase()}
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-xl font-medium">
                {currentName || "ব্যবহারকারী"}
              </h2>
              <p className="truncate text-sm text-gray-600 sm:text-base">
                {email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-red-500 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 sm:self-center"
          >
            <FaArrowRightFromBracket size={13} />
            সাইন আউট
          </button>
        </section>

        <section className="rounded-2xl border border-[#dfe6df] bg-[#fbfcfb] p-5">
          <h2 className="mb-4 text-xl font-bold">নাম হালনাগাদ করুন</h2>

          <form onSubmit={handleUpdateName}>
            <label htmlFor="name" className="mb-2 block text-base font-medium">
              নাম
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={name || currentName}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={100}
              className="h-11 w-full rounded-xl border border-[#cbd1cb] bg-transparent px-4 text-sm outline-none transition focus:border-[#05893e] focus:ring-2 focus:ring-[#05893e]/15"
            />

            <button
              type="submit"
              disabled={isSaving || !(name || currentName).trim()}
              className="mt-3 rounded-lg bg-[#05893e] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#047632] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSaving ? "আপডেট হচ্ছে..." : "নাম হালনাগাদ করুন"}
            </button>

            {message && (
              <p role="status" className="mt-3 text-sm text-gray-700">
                {message}
              </p>
            )}
          </form>
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;
