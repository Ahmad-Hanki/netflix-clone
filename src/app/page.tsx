import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {

  return (
    <div>
      <Button >Hello</Button>
    </div>
  );
}
