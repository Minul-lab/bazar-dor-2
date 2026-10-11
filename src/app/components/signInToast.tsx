"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";
import { toast, Bounce } from "react-toastify";

const SignInToast = () => {
  const session = authClient.useSession();
  const user = session.data?.user;

  useEffect(() => {
    const shouldShowToast = sessionStorage.getItem("showSignInToast");

    if (user && shouldShowToast === "true") {
      toast.success("সফলভাবে সাইন ইন করেছেন!", {
        position: "top-center",
        transition: Bounce,
      });

      sessionStorage.removeItem("showSignInToast");
    }
  }, [user]);

  return null;
};

export default SignInToast;
