'use client'
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import GlobalApi from "./_utils/GlobalApi";

export default function Home() {
  const router = useRouter();
  const { user, isLoaded } = useUser();
  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    } else {
      isLoaded && router.push('/courses')
    }
  }, [user]);



  return (

    <UserButton />
  );
}
