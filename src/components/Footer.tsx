import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/react";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="h-auto py-2 md:h-16 md:py-0  flex md:px-28 px-4 md:flex-row flex-col gap-y-4 md:gap-y-0 items-center justify-between text-white">
      <div className="flex gap-x-4 items-center">
        <p>Made With 💌</p>
        <Button
          as={Link}
          href="https://github.com/x"
          endContent={<FiGithub />}
          variant="bordered"
          color="primary"
        >
          Source Code
        </Button>
      </div>
      <Link href="https://azizimranzade.vercel.app" target="_blank">
        Developed BY | Aziz Imranzade
      </Link>
    </footer>
  );
};
export default Footer;
