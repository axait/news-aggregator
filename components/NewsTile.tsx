"use client";

import React from 'react'

function NewsTile({ title, description, url }: { title?: string; description?: string, url?: string }) {

  return (
    <>
      <a href={url} target="_blank" >
        <div
          className="
      bg-[#0d0d0d94]
      min-h-28
      p-2
      rounded-2xl
      my-4
      "
        >
          <div
            className="
        min-h-10
        pb-2
        mb-2 ml-1 mt-1
        text-xl
        "
          >
            {title || "No title"}
          </div>

          {/* 👇 Render HTML safely */}
          <p
            className="
        bg-[#0000002a]
        text-xs ml-2
        "
          >
            {description || "No description"}
          </p>
        </div>
      </a>
    </>
  );
}

export default NewsTile;
