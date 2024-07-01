"use client"

import { useState } from "react";

export default function VideoRelaxamento({ video, funcao }) {
  return (
    <>
      <div className="h-fit w-fit relative" onClick={() => funcao(video)}>
        <iframe
          width="400"
          height="315"
          src={`https://www.youtube.com/embed/${video && video.link}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-2xl xs:hidden sm:flex"
        ></iframe>
        <div className="h-full w-full absolute top-0 left-0"></div>
      </div>
      <div className="h-fit w-fit relative" onClick={() => funcao(video)}>
        <iframe
          width="250"
          height="215"
          src={`https://www.youtube.com/embed/${video && video.link}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-2xl sm:hidden"
        ></iframe>
        <div className="h-full w-full absolute top-0 left-0"></div>
      </div>
    </>
  );
}
