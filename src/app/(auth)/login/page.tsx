import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import GoogleIcon from "@/assets/google.svg";
import GithubIcon from "@/assets/github.svg";
import Image from "next/image";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Email from "./_components/Email";
const LoginPage = () => {
  console.log(process.env.GMAIL_CONNECTION_ID);
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <Email />
      <div className="text-gray-500 text-sm mt-2">
        New to netflix?{" "}
        <Link className="text-white hover:underline" href={"/sign-up"}>
          Sign Up
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <LoginLink
          authUrlParams={{
            connection_id: process.env.GITHUB_CONNECTION_ID!,
          }}
        >
          <Button variant={"outline"} size={"icon"}>
            <Image src={GithubIcon} alt="github" className="w-6 h-6" />
          </Button>
        </LoginLink>
        <LoginLink
          authUrlParams={{
            connection_id:process.env.GMAIL_CONNECTION_ID!,
          }}
        >
          <Button variant={"outline"} size={"icon"}>
            <Image src={GoogleIcon} alt="google" className="w-6 h-6" />
          </Button>
        </LoginLink>
      </div>
    </div>
  );
};

export default LoginPage;
