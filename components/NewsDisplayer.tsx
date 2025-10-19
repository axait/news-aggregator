"use client";
import NewsTile from './NewsTile';

import React from 'react'

const NewsDisplayer = () => {
    return (
        <div
            className='
            min-h-screen
            mt-[10vh]
            '
        >
            <NewsTile />
            <NewsTile />
            <NewsTile />
            <NewsTile />
            <NewsTile />
            <NewsTile />
        </div>
    )
}

export default NewsDisplayer
