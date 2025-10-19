"use client";

import NewsTile from './NewsTile';

import { v4 as uuidv4 } from 'uuid';
import React from 'react'

async function getNews() {
  try {
    const response = await fetch("/api/news");
    const data = await response.json();

    if (data.error) {
      return [{ title: "Error", description: data.error, url:"#Error" }];
    }

    return data?.articles ?? [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [{ title: "Contact the developer", description: String(error), url: "#Error" }];
  }
}


const NewsDisplayer = () => {
    const [finalArticles, setFinalArticles] = React.useState<{ title?: string, description?: string, url?: string }[]>([]);

    React.useEffect(() => {
        // only runs once after component mounts

        async function fetchArticles() {
            const articles = await getNews();
            setFinalArticles(articles);
        }
        fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                finalArticles.map(info => (
                    <NewsTile key={uuidv4()} title={info.title} description={info.description} url={info.url} />
                ))
            }
        </div>
    )
}

export default NewsDisplayer
