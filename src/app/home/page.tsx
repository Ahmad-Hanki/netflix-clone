import MovieVideo from "@/components/MovieVideo";
import Navbar from "@/components/Navbar";
import RecentlyAdded from "@/components/Recently-Added";
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

  return <div className="p-5 lg:p-0">
    <MovieVideo />
    <h1 className = {'text-3xl font-bold'}> Recently Added</h1>
    <RecentlyAdded />
  </div>;
};

export default HomePage;
