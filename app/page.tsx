import React from 'react'
import Title from '@/components/Title'
import NewsDisplayer from '@/components/NewsDisplayer'

const page = () => {
	const url = 'https://newsapi.org/v2/everything?' +
		'q=Apple&' +
		'from=2025-10-18&' +
		'sortBy=popularity&' +
		'apiKey=25cfea4be4974cf2abeacabc15e2c110';

	const req = new Request(url);

	fetch(req)
		.then(function (response) {
			console.log("response");
			// console.log(response.json());
		})
		
	return (
		<div
			className='
			min-h-[90vh]
			w-[70%] min-w-[550px]
			mx-auto my-5
		'
		>
			<Title />
			<NewsDisplayer />
		</div>
	)
}

export default page
