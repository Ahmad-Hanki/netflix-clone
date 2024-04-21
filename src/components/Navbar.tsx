"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Menu, Search } from "lucide-react";
import UserNav from "./UserNav";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

interface LinksProps {
  name: string;
  href: string;
}

const links: LinksProps[] = [
  { href: "/home", name: "Home" },
  { href: "/home/shows", name: "Tv Shows" },
  { href: "/home/movies", name: "Movies" },
  { href: "/home/recently", name: "Recently Added" },
  { href: "/home/user/list", name: "My List" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href={"/home"} className="w-32 ">
          <Image src={Logo} alt="photo" className="" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, i) => {
            return (
              <div key={i}>
                {pathname === link.href ? (
                  <Link
                    href={link.href}
                    className="text-white font-semibold underline text-sm"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <li>
                    <Link
                      href={link.href}
                      className="text-gray-300 font-normal text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                )}
              </div>
            );
          })}
        </ul>
        <div className="lg:hidden ml-16">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Menu size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {links.map((link, i) => {
                  return (
                    <div key={i}>
                      {pathname === link.href ? (
                        <DropdownMenuItem>
                          <Link
                            href={link.href}
                            className="text-white font-semibold underline text-sm"
                          >
                            {link.name}
                          </Link>
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem>
                          {" "}
                          <Link
                            href={link.href}
                            className="text-gray-300 font-normal text-sm"
                          >
                            {link.name}
                          </Link>
                        </DropdownMenuItem>
                      )}
                    </div>
                  );
                })}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="w-full">
                <LogoutLink className="w-full">
                  <Button className="w-full">Logout</Button>
                </LogoutLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex items-center gap-x-8">
        <Search className="w-5 g-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-500" />
        <UserNav />
      </div>
    </div>
  );
};

export default Navbar;
