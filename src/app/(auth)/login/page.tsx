import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import GoogleIcon from "@/assets/google.svg";
import GithubIcon from "@/assets/github.svg";
import Image from "next/image";
const SignInPage = () => {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold">Log in</h1>
        <div className="space-y-4 mt-5 ">
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            className="bg-[#333] placeholder:text-sm placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant={"destructive"}
            className="w-full bg-[#e50914]"
          >
            Log in
          </Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm mt-2">
        New to netflix?{" "}
        <Link className="text-white hover:underline" href={"/sign-up"}>
          Sign Up
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant={"outline"} size={"icon"}>
          <Image src={GithubIcon} alt="github" className="w-6 h-6" />
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <Image src={GoogleIcon} alt="google" className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default SignInPage;
