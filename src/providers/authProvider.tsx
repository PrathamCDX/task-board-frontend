"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useIsAuthenticated } from "@/utils/useIsAutheticated";
import { setUser } from "@/lib/reduxSlices/setUser";
import { User } from "@/types/User";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const router = useRouter();

  const { data, isSuccess, isError } = useIsAuthenticated();

  useEffect(() => {
    if (isError) {
      router.replace("/signup");
    }

    if (isSuccess && data) {
      const user_: User = {
        id: data.id,
        fullName: data.fullName,
        email: data.email,
      };

      dispatch(setUser(user_));
      router.replace("/");
    }
  }, [isError, isSuccess, data, dispatch, router]);

  return <>{children}</>;
}
