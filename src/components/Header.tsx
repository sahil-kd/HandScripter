import { useRef } from "react";
import "./Header.css";

export default function Header() {
  const titleElement = useRef<HTMLHeadingElement | null>(null);
  return (
    <>
      <h1
        ref={titleElement}
        className="main-title"
        onMouseEnter={() => {
          if (titleElement.current) {
            setTimeout(() => {
              if (titleElement.current) {
                // titleElement.current.style.fontStyle = "italic";
              }
            }, 2000);
          }
        }}
        // onMouseLeave={() => {
        //   if (titleElement.current) titleElement.current.style.color = "white";
        // }}
      >
        handScripter
      </h1>
    </>
  );
}
