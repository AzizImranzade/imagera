"use client";
import { menu } from "@/types/index";
import Logo from "./Logo";
import { RiImageAddLine } from "react-icons/ri";
import { RiHome5Line } from "react-icons/ri";

import { usePathname } from "next/navigation";
import { Link } from "@nextui-org/link";
import isMenuActive from "@/lib/isMenuActive";
const Header = () => {
  const menuList: menu[] = [
    {
      title: "Home",
      path: "/",
      icon: <RiHome5Line />,
    },
    {
      title: "Upload",
      path: "/upload",
      icon: <RiImageAddLine />,
    },
  ];
  const pathname = usePathname();

  return (
    <header className="w-full md:px-28 px-4 h-16 flex items-center justify-between">
      <Logo />
      <ul className="flex gap-x-6">
        {menuList.map((menuItem, index) => (
          <Link
            href={menuItem.path}
            key={index}
            className={`flex gap-x-2 ${
              isMenuActive(pathname, menuItem.path)
                ? "text-primary"
                : "text-white/70"
            }`}
          >
            <i>{menuItem.icon}</i>
            {menuItem.title}
          </Link>
        ))}
      </ul>
    </header>
  );
};
export default Header;
