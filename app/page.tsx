import React from 'react'
import Title from '@/components/Title'
import NewsTile from '@/components/NewsTile'

const page = () => {
	return (
		<div
			className='
			min-h-[90vh]
			w-[70%] min-w-[550px]
			mx-auto my-5
		'
		>
			<Title />
			<NewsTile />
		</div>
	)
}

export default page
