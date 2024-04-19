"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ChangeEvent, useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(email);
  };

  return (
    <div>
      <form>
        <h1 className="text-3xl font-semibold">Login</h1>
        <div className="space-y-4 mt-5 ">
          <Input
            onChange={changeHandler}
            type="email"
            name="email"
            placeholder="E-mail"
            className="bg-[#333] placeholder:text-sm placeholder:text-gray-400 w-full inline-block"
          />

          <RegisterLink
            authUrlParams={{
              connection_id: process.env.EMAIL_CONNECTION_ID ?? "",
              login_hint: email,
            }}
          >
            <Button
              type="button"
              variant={"destructive"}
              className="w-full bg-[#e50914]"
            >
              {" "}
              Sign Up{" "}
            </Button>
          </RegisterLink>
        </div>
      </form>
    </div>
  );
};

export default Email;
