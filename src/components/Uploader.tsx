import { useRef } from "react";
import "./Uploader.css";
import { uploadToServer } from "../../server/API_endpoints.ts";

/**
- We will make HTTP request to express server from python (AI) processor for exchanging image info
  via a python library called "requests" [pip install requests]

- Rejected image format will be notified to the user via a model, and clear selection (svg, png, jpg allowed)
- The uploader also need a special hover effect on drag
- And need a more specified API route instead of relying on root path for POST requests
- The shape of e.dataTransfer.files.item(0) and e.target.files.item(0) is:
{
  lastModified: [A number specifying the date and time at which the file was last modified, 
    in milliseconds since the UNIX epoch]
  name: Name.ext
  size: The size of the file in bytes
  type: The file's MIME type e.g.: "image/png", "image/svg", "image/jpg"
  webkitRelativePath: File's path relative to base directory selected in a directory picker (**non-standard)
}
**/

interface ImageObject {
  coreData: string;
  name: string;
  size: number;
  type: string;
}

export default function Uploader() {
  const fileSelector = useRef<HTMLInputElement>(null);

  function handlePOST(imageData: ImageObject) {
    uploadToServer
      .post("/", {
        imageData,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  /*
    To display the image you would need to do something like:
    <img src={`data:image/svg+xml,${encodeURIComponent(res.data)} height={} width={} />
    along with toggling/change of component state and events else image won't display
  */

  return (
    <>
      <div
        className="uploader"
        onClick={() => {
          fileSelector.current?.click();
        }}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files[0];
          const reader = new FileReader();

          // setting up the event listener for reader first
          reader.onload = function (event) {
            const fileContents = event.target?.result;
            handlePOST({
              coreData: fileContents as string,
              name: file.name,
              size: file.size,
              type: file.type,
            });
          };

          // then the core event to be listened to, reading file while event listener listens
          // till reading is complete and file data fully loaded
          reader.readAsText(file);
        }}
        onDragOver={(e) => e.preventDefault()} // preventing this default is important else leads to bugs
      >
        Drop images here
        <br /> OR
        <br />
        Click to Upload
        <input
          type="file"
          accept="image/png, image/jpg, image/svg"
          ref={fileSelector}
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files?.item(0);
            if (!file) return;

            const reader = new FileReader();

            // setting up the event listener for reader first
            reader.onload = function (event) {
              const fileContents = event.target?.result;
              handlePOST({
                coreData: fileContents as string,
                name: file.name,
                size: file.size,
                type: file.type,
              });
            };

            // then the core event to be listened to, reading file while event listener listens
            // till reading is complete and file data fully loaded
            reader.readAsText(file);
          }}
        />
      </div>
    </>
  );
}
