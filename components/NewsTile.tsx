"use client";

import React from 'react'

function NewsTile ({key, title, content}:{ key:string, title: string|undefined ,content: string|undefined }) {
  return (
    <div
    key={key}
    className='
    bg-[#0d0d0d94]
    min-h-28
    p-2
    rounded-2xl
    my-4
    '
    >
      <div
        className='
        min-h-10
        pb-2
        mb-2 ml-1 mt-1
        text-xl
        '
        >{title || "No title"}</div>
      <p
        className='
        bg-[#0000002a]
        text-xs ml-2
      '
      >{content || "No content"}</p>

    </div>
  )
}

export default NewsTile
