"use client";

import NewsTile from './NewsTile';

import React from 'react'

async function getNews() {

    const url = 'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2025-10-18&' +
        'sortBy=popularity&' +
        'apiKey=25cfea4be4974cf2abeacabc15e2c110';

    const req = new Request(url);

    try {
        const response = await fetch(req);
        const data = await response.json();
        // For Debugging
        // console.log("-------------response-------------");
        // console.log(data["articles"])
        // console.log("-------------Done-------------");

        return data["articles"]; // ✅ Now getNews actually returns the data

    } catch (error) {
        console.error("Error fetching news:", error);
        return [{ title: "Contact the developer", description: `->${error}` }];
    }

}
const NewsDisplayer = () => {
    const [finalArticles, setFinalArticles] = React.useState([]);

    React.useEffect(() => {
        // ✅ only runs once after component mounts
        async function fetchArticles() {
            const articles = await getNews();
            setFinalArticles(articles);
        }

        fetchArticles();
    }, []);

    return (
        <div
            className='
            min-h-screena
            mt-[10vh]
            '
        >
            {/* <NewsTile key={50000} title={"title"} description={"article"} /> */}

            {
                typeof finalArticles === "undefined" || finalArticles.length === 0 ?
                    (
                        <p className="text-center text-gray-400">Loading news...</p>
                    )
                    :
                    (
                        finalArticles.map((info, index) => (
                            <NewsTile key={index} title={info.title} description={info.description} />
                        ))
                    )
            }
        </div>
    )
}

export default NewsDisplayer
