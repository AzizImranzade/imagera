import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { Snippet } from "@nextui-org/snippet";
import { FaLink } from "react-icons/fa6";
import { notFound } from "next/navigation";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/react";
interface ImageViewProps {
  params: {
    imageId: string;
  };
}

const ImageView: React.FC<ImageViewProps> = async ({ params }) => {
  const { imageId } = params;
  const docRef = doc(db, "images", imageId);
  const docSnapshot = await getDoc(docRef);
  if (!docSnapshot.exists()) {
    notFound();
  }
  const imageData = docSnapshot.data();
  const link = `https://imageraa.vercel.app/${imageId}`;
  return (
    <main className="text-white flex items-center justify-center h-[calc(100vh-4rem)] md:px-0 px-4">
      <div className=" shadow-xl  gap-y-6 border-2 rounded-md   md:p-4 p-2 md:w-[40rem] max-w-full flex flex-col items-center ">
        <Image
          src={imageData.url}
          isLoading={imageData ? false : true}
          alt="test"
          className=" object-contain max-h-[35rem] md:w-auto "
        />
        <Snippet
          symbol={<FaLink className=" inline mr-2" />}
          color="primary"
          variant="bordered"
          className="w-full"
          classNames={{ pre: "break-words w-full  line-clamp-1" }}
        >
          {link}
        </Snippet>
      </div>
    </main>
  );
};

export default ImageView;
