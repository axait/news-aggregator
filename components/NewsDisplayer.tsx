"use client";

import NewsTile from './NewsTile';

import { v4 as uuidv4 } from 'uuid';
import React from 'react'

async function getNews() {

    const url = 'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2025-10-18&' +
        'sortBy=popularity&' +
        'apiKey=25cfea4be4974cf2abeacabc15e2c110';


    try {
        const response = await fetch(url);
        const data = await response.json();

        return data["articles"];

    } catch (error) {
        console.error("Error fetching news:", error);
        return [{ title: "Contact the developer", content: `->${error}` }];
    }

}
const NewsDisplayer = () => {
    const [finalArticles, setFinalArticles] = React.useState<{ title?: string, content?: string }[]>([]);
    const [isFetched, setIsFetched] = React.useState(false);

    React.useEffect(() => {
        // only runs once after component mounts
        if (isFetched) return;

        async function fetchArticles() {
            setIsFetched(true);
            const articles = await getNews();
            setFinalArticles(articles);
        }
        fetchArticles();
        // setFinalArticles([
        //     {
        //         title: "Why The Boys: Diabolical Was Canceled By Amazon",
        //         content: "The first spin-off of The Boys was the animated series, Diabolical, but it looks like Amazon's Prime Video is not going to pursue more episodes.",
        //     },
        //     {
        //         title: "A number of early iPhone 17 Pro adopters face decolorization issues",
        //         content: "It all started with a couple of Reddit posts by users reporting strange decolorization on their orange iPhone 17 Pro and 17 Pro Max models. However, more and more cases are now emerging.\n\n\n\n\nDecolorized iPhone 17 Pro Max in Cosmic Orange and Deep Blue\n\nIn fac…",
        //     },
        // ]);
    }, []);

    return (
        <div
            className='
            min-h-screena
            mt-[10vh]
            '
        >
            {/* <NewsTile key={50000} title={"title"} content={"article"} /> */}

            {
                typeof finalArticles === "undefined" || finalArticles.length === 0 ?
                    (
                        <p className="text-center text-gray-400 h-[85vh]">Loading news...</p>
                    )
                    :
                    (
                        finalArticles.map(info => (
                            <NewsTile key={uuidv4()} title={info.title} content={info.content} />
                        ))
                    )
            }
        </div>
    )
}

export default NewsDisplayer
