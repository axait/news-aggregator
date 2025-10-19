"use client";

import { useEffect, useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


const Title = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const hasScrolled = useRef<boolean>(false); // Prevent multiple triggers

    useEffect(() => {
        const handleScroll = () => {
            // was just for debugging scrolling
            // console.log(window.scrollY)


            if (!hasScrolled.current && window.scrollY > 135) {
                hasScrolled.current = true;

                // Smoothly scroll to the next section
                sectionRef.current?.scrollIntoView({ behavior: "smooth" });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className='
            h-[99vh]
            -translate-y-[2%]
            flex justify-center items-center flex-col
            '
            >
                <div
                    className='
                    flex items-center justify-center
                    text-3xl font-mono
                    h-[60px]
                    '
                >
                    <span>
                        News Aggregator
                    </span>
                </div>

                <div
                    className='
                    absolute bottom-9
                    '
                >
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>

            </div>

            <div
                ref={sectionRef}
            >
            </div>
        </>
    )
}

export default Title
