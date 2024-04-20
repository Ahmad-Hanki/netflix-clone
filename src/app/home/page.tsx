import Navbar from "@/components/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const HomePage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user == null) {
    redirect("/login");
  }

  return <div>hello home</div>;
};

export default HomePage;
