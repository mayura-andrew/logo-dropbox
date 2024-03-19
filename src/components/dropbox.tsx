import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";
import Link from "next/link";
import { useState } from "react";


export default function Dropbox() {
    const [file, setFile] = useState<File>();
    const [progress, setProgress] = useState(0);
    const [urls, setUrls] = useState<{
      url: string;
      thumbnailUrl: string | null;
    }>();
    const { edgestore } = useEdgeStore();
    const [buttonText, setButtonText] = useState("Upload");
  
  
    return (
      <>
    <div>
      <SingleImageDropzone
          width={200}
          height={200}
          value={file}
          dropzoneOptions={{
            maxSize: 1024 * 1024 * 5, // 5MB
          }}
          onChange={(file) => {
            setFile(file);
          } } />
        <div className="h-[6px] w-44 border rounded overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-150"
            style={{
              width: `${progress}%`,
            }} />
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 m-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={async () => {
            if (!file) {
              alert("Please select an image file before submitting😊.");
              return;
            }
            setButtonText("Submitting... 🚀"); 
            if (file) {
              const res = await edgestore.myPublicImages.upload({
                file,
                input: { type: "post" },
                onProgressChange: (progress) => {
                  setProgress(progress);
                },
              });
              // save your data here
              setUrls({
                url: res.url,
                thumbnailUrl: res.thumbnailUrl,
              });
              setButtonText("Submitted! 🎉"); 
            }
          } }
        >
          {buttonText} {/* Display the current button text */}
        </button>
        {urls?.url && (
          <Link href={urls.url} target="_blank">
            URL
          </Link>
        )}
        {urls?.thumbnailUrl && (
          <Link href={urls.thumbnailUrl} target="_blank">
            Review
          </Link>
        )}
    </div>
  </>
    );
  }