import { FlipWords } from "@/components/ui/flip-wors";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { FaUpload } from "react-icons/fa";
import Image from "next/image";
import { feature, howItWork } from "@/types";
import FeatureBox from "./FeatureBox";
import {
  FaCloudUploadAlt,
  FaHdd,
  FaLock,
  FaEdit,
  FaRobot,
  FaUserShield,
} from "react-icons/fa";
import HowItWorksBox from "./HowItWorksBox";

const Home = () => {
  const words = ["Fast", "Secure", "Easliy"];
  const features: feature[] = [
    {
      title: "Easy Upload",
      icon: <FaCloudUploadAlt />,
      text: "Seamlessly upload your images with just a few clicks using our user-friendly interface.",
    },
    {
      title: "High-Quality Storage",
      icon: <FaHdd />,
      text: "Store your images in full resolution without any compression, ensuring your memories stay crystal clear.",
    },
    {
      title: "Secure Backup",
      icon: <FaLock />,
      text: "Your images are safely backed up in the cloud, protected with advanced encryption for peace of mind.",
    },
    {
      title: "Photo Editing Tools",
      icon: <FaEdit />,
      text: "Enhance your images with a suite of powerful editing tools, including filters, crop, and adjustments.",
    },
    {
      title: "AI Tagging",
      icon: <FaRobot />,
      text: "Automatically tag and categorize your images using advanced AI, making it easier to find and manage your photos.",
    },
    {
      title: "Privacy Controls",
      icon: <FaUserShield />,
      text: "Manage your privacy settings to control who can view and share your images, ensuring your personal photos stay private.",
    },
  ];
  const howItWorks: howItWork[] = [
    {
      title: "Upload Your Image",
      text: "Begin by selecting the image you wish to upload. With Imagera’s intuitive interface, simply click to upload and watch as your photo is securely transferred to our servers.",
      image: "/upload_image.svg",
    },
    {
      title: "Wait",
      text: "Once uploaded, Imagera meticulously processes your image, ensuring every pixel is optimized for quality and performance. Sit tight while our advanced algorithms work their magic in the background.",
      image: "/wait.svg",
    },
    {
      title: "URL Is Ready",
      text: "Voila! Your image is now securely stored and ready to be shared. Imagera provides you with a unique URL for your photo, making it effortless to showcase your memories with friends, family, or colleagues.",
      image: "/completed.svg",
    },
  ];
  return (
    <main className="w-full bg-foreground flex flex-col h-auto">
      <section className="h-[calc(100vh-4.1rem)] flex md:px-28 md:flex-row flex-col w-full  items-center justify-center">
        <div className="h-full w-1/2 flex  justify-center items-center md:items-start flex-col gap-y-10  ">
          <h1 className="md:text-5xl text-3xl text-white font-bold font-mono text-center md:text-left relative">
            Upload Your Images <br /> With Imagera
            <FlipWords words={words} className="text-white " />
          </h1>

          <p className="text-white/70 hidden md:flex">
            Discover the simplicity of sharing your visual stories with Imagera.
            Our platform allows you to effortlessly upload and showcase your
            images, transforming moments into lasting memories. Whether
            it&apos;s a stunning landscape or a candid capture, Imagera makes it
            easy to share your vision with the world.
          </p>
          <Button
            as={Link}
            href="/upload"
            startContent={<FaUpload />}
            className=" flex-grow-0 w-52"
            size="lg"
            variant="ghost"
            color="primary"
          >
            Start Uploading
          </Button>
        </div>

        <div className="h-full w-full flex md:w-1/2  items-center md:justify-end justify-center ">
          <div className="md:h-[30rem] md:w-[30rem] h-[20rem] w-[20rem] relative">
            <Image src="/banner.svg" alt="test" fill />
          </div>
        </div>
      </section>
      <section className="md:h-[100vh] w-full md:px-28 px-4 md:mb-0 mb-14">
        <h1 className="text-center md:text-4xl  text-2xl text-white  mb-10">
          What Makes Us Different <br /> Than Others
        </h1>
        <div className="w-full grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 gap-8 md:h-[35rem] ">
          {features.map((feature, index) => (
            <FeatureBox feature={feature} key={index} />
          ))}
        </div>
      </section>
      <section className="md:h-[100vh] w-full md:px-28 px-4 mb-10 md:mb-0">
        <div className="mb-10 space-y-4">
          <h1 className="text-center md:text-4xl text-2xl  text-white ">
            How It Really Works
          </h1>
          <p className="text-white/70 text-center capitalize w-[80%] mx-auto">
            Experience Imagera&apos;s elegant interface as it empowers
            effortless image management, enhancing your social connections
            through seamless sharing and collaborative features.
          </p>
        </div>
        <div className="w-full grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 gap-8 md:h-[35rem]  ">
          {howItWorks.map((howItWork, index) => (
            <HowItWorksBox key={index} order={index} blockData={howItWork} />
          ))}
        </div>
      </section>
    </main>
  );
};
export default Home;
