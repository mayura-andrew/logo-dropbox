import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";
import Link from "next/link";
import { useState } from "react";
import Contact from "./contact";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button"

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
      <h2 className="text-lg font-bold text-white items-center">Submit your amazingly designed logo here 🎨⬇️</h2>
      <SingleImageDropzone
          width={488}
          height={200}
          value={file}
          dropzoneOptions={{
            maxSize: 1024 * 1024 * 5, // 5MB
          }}
          onChange={(file) => {
              setFile(file);
          }} 
          />
        <div className="h-[6px] w-47 border rounded overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-150"
            style={{
              width: `${progress}%`,
            }} />
        </div>
        <div className="flex items-center justify-center m-2">
          <Button variant="destructive"
            onClick={async () => {
              if (!file) {
                <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components and dependencies to your app using the cli.
                  </AlertDescription>
                </Alert>
                // alert("Please select an image file before submitting😊.");
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
          </Button>
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
        <div className="gap-1 m-2">
          <Contact />
        </div>
        
    </div>
  </>
    );
  }