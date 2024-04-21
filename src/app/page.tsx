import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export default async function Home() {
  const {isAuthenticated} = getKindeServerSession();
  if (await isAuthenticated()) {
    redirect('/home')
  } else {
    redirect('/login');
  }
}
