import Image from "next/image";
import Hero from "@/assets/login_background.jpg";
import Logo from "@/assets/netflix_logo.svg";
interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent ">
      <Image
        src={Hero}
        alt="bg-image"
        priority
        fill
        className="hidden sm:flex sm:object-cover -z-10 brightness-75"
      />
      <Image
        src={Logo}
        alt="logo"
        width={120}
        height={120}
        priority
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
      />
      {children}
    </div>
  );
};

export default AuthLayout;
