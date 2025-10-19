"use client";

import { title } from 'process';
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

    console.log("-----------------------------------------")
    getNews().then((articles) => {
        
        // setFinalArticles(articles)
        console.log(articles)
        console.log("-----------------GetNews------------------------")
    });

    // for (const article of articles) {
    //     console.log(article)
    // }

    return (
        <div
            className='
            min-h-screen
            mt-[10vh]
            '
        >
            {/* <NewsTile title={"title"} description={"article"} /> */}

            {finalArticles.length === 0 ? (
                <p className="text-center text-gray-400">Loading news...</p>
            ) : (
                finalArticles.map((title, description, index) => (
                    <NewsTile key={index} title={title} description={description} />
                ))
            )}
        </div>
    )
}

export default NewsDisplayer
