import Image from "next/image";
import { FaUpload } from "react-icons/fa";
import DropZone from "./DropZone";
const Upload = () => {
  return (
    <main className="flex h-[calc(100vh-4rem)] w-full bg-foreground md:px-32 md:py-20 p-6 ">
      <div className="h-full w-full rounded-xl  border-2 border-gray-500/80 grid grid-cols-12  ">
        <DropZone />
        <div className=" col-span-5 md:flex hidden  flex-shrink-0 h-full flex-col items-center justify-center gap-y-6 px-6 ">
          <h1 className="text-4xl flex gap-x-2 text-white">
            <FaUpload />
            Upload Your Image
          </h1>
          <p className="text-white/70 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            inventore nam consectetur laudantium laborum ab dignissimos
            perspiciatis odit fugit deserunt cumque, totam voluptatibus omnis
            veniam aut qui illum ad consequatur!
          </p>
          <div className="relative h-60 w-60 flex-shrink-0">
            <Image fill src={"/wait.svg"} alt="Upload Image" />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Upload;
