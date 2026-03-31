"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store.config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const user = useSelector((state: RootState) => state.userDetails.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user]);

  return <div>Welcome to Task_Board</div>;
}
