import Title from '@/components/Title'
import NewsDisplayer from '@/components/NewsDisplayer'

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
			<NewsDisplayer />
		</div>
	)
}

export default page
