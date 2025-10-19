import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Title = () => {
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
        </>
    )
}

export default Title
