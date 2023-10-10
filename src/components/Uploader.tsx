import { useRef } from "react";
import "./Uploader.css";
import serAxios from "../../server/serverAxios.ts";

export default function Uploader() {
  const fileSelector = useRef<HTMLInputElement>(null);

  function handlePOST(svgData: any) {
    serAxios
      .post("/", {
        svgData: svgData,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  // console.log(fileSelector.current?.name);
  return (
    <>
      <div
        className="uploader"
        onClick={() => {
          fileSelector.current?.click();
        }}
        onDrop={(e) => {
          e.preventDefault();
          // file captured in div, send the file to server or use it from here
          console.log(e.dataTransfer.files[0].name);
          handlePOST(e.dataTransfer.files[0].name);
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
            console.log(e.target.files?.item(0));
            handlePOST(e.target.files?.item(0)?.name);
          }}
        />
      </div>
    </>
  );
}
