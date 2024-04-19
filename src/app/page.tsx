import { Button } from "@/components/ui/button";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {

  const {getUser} = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect('/login');
  }
  const email = user?.email

  return (
    <div>
      <Button>
        <LogoutLink >
          {email} meh
        </LogoutLink>
      </Button>
      <h1>Hello</h1>
    </div>
  );
}
