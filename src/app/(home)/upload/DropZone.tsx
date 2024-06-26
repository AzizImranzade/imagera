"use client";
import { Button } from "@nextui-org/button";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BiLink, BiTrashAlt } from "react-icons/bi";
import { FaFile } from "react-icons/fa";
import { toast } from "sonner";
import { db, storage } from "../../../../firebase";
import { v4 as uuidv4 } from "uuid";
import { Progress, Snippet } from "@nextui-org/react";
import { FaLink } from "react-icons/fa6";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { IoReload } from "react-icons/io5";

const DropZone = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState<number>(0);
  const [downloadUrl, setDownloadUrl] = useState<string>();
  const onDrop = useCallback((acceptedFiles: any, rejectedFiles: any) => {
    // do something
    if (acceptedFiles.length > 0) {
      toast.success("Image Selected Succesfuly", {
        duration: 2000,
        closeButton: true,
      });
      setImage(acceptedFiles[0]);
    }
    if (rejectedFiles.length > 0) {
      toast.error("This Type Doest Supported", {
        duration: 2000,
        closeButton: true,
      });
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    onDrop,
  });
  const uploadImage = () => {
    if (image !== null) {
      const id = uuidv4();
      const imgRef = ref(storage, id);
      const uploadTask = uploadBytesResumable(imgRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (error) => {
          toast.error(error.message);
        },
        () => {
          const docRef = doc(db, "images", id);

          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
            await setDoc(docRef, {
              id: id,
              url: downloadUrl,
              date: serverTimestamp(),
            });
          });
          setDownloadUrl(`https://imageraa.vercel.app/${id}`);
          setProgress(0);
          toast.success("Image Uploaded Succesfuly");
        }
      );
    } else {
      toast.error("There Is No Image");
    }
  };
  return (
    <div className=" md:col-span-7 col-span-12 flex md:p-10 p-3   flex-col h-full flex-shrink-0">
      {image == null ? (
        <div
          {...getRootProps()}
          className={`w-full text-center  border-primary border-dashed  md:px-0 px-4 h-full border-4  justify-center ${
            isDragActive ? "text-white" : "text-white/70"
          } bg-primary/10 flex flex-col gap-y-6 items-center transition-all`}
        >
          <input {...getInputProps()} maxLength={1} name="image" />
          <FaFile className="text-4xl" />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag and drop some files here, or click to select files</p>
          )}
        </div>
      ) : (
        <div
          className={`flex w-full transition-all flex-col items-center gap-y-8 h-full  justify-center`}
        >
          <div className="relative h-72 w-72 rounded-lg overflow-hidden flex-shrink-0 ">
            <Image
              fill
              className=" object-cover"
              src={image ? URL.createObjectURL(image) : ""}
              alt={"te"}
            />
          </div>

          <div className=" flex gap-x-10 md:gap-y-0 gap-y-4 md:flex-row flex-col">
            {!downloadUrl && (
              <>
                <Button
                  startContent={<BiLink className="text-xl" />}
                  size="lg"
                  color="primary"
                  variant="ghost"
                  onClick={uploadImage}
                >
                  Get Your Link
                </Button>
                <Button
                  size="lg"
                  color="danger"
                  startContent={<BiTrashAlt className="text-xl" />}
                  onClick={() => {
                    setImage(null);
                    toast.error("Image has been removed");
                  }}
                  variant="ghost"
                >
                  Remove Image
                </Button>
              </>
            )}
          </div>
          <div className=" w-full ">
            {progress !== 0 && (
              <Progress
                value={progress}
                isStriped
                color="primary"
                className={`${progress === 100 ? "hidden" : "flex"}`}
              />
            )}
            {downloadUrl && (
              <div className="space-y-4">
                <Snippet
                  symbol={<FaLink className=" inline mr-2" />}
                  color="primary"
                  onCopy={(e) => {
                    toast.success("Your text has been copied");
                  }}
                  variant="bordered"
                  className="w-full"
                  classNames={{ pre: "break-words w-full  line-clamp-1" }}
                >
                  {downloadUrl}
                </Snippet>
                <Button
                  startContent={<IoReload />}
                  className="w-full"
                  onClick={() => {
                    setProgress(0);
                    setDownloadUrl("");
                    setImage(null);
                  }}
                  variant="ghost"
                  color="primary"
                >
                  Upload Another
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropZone;
