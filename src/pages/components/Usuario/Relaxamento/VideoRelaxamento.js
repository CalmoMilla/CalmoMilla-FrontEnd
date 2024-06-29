import { useState } from "react";
export default function VideoRelaxamento({ url }) {
  return (
    <>
      {" "}
      <iframe
        width="400"
        height="315"
        src={`https://www.youtube.com/embed/${url}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-2xl xs:hidden sm:flex"
      ></iframe>
      <iframe
        width="250"
        height="215"
        src={`https://www.youtube.com/embed/${url}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-2xl sm:hidden"
      ></iframe>
    </>
  );
}
