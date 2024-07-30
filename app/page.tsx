export default function Page() {
	return (
		<div className='p-4'>
			<h1 className='text-2xl sm:text-4xl font-thin pt-20 max-w-3xl leading-loose'>
				<b>PlatoPunk</b> is a software development studio trying to ship
				<i className='px-2 underline decoration-2 underline-offset-8'>
					minimalistic software
				</i>{' '}
				to the world.
			</h1>

			<div className='bg-gray-100 absolute bottom-0 right-10 h-[30rem] w-[30rem] rounded-full animate-bounce' />
		</div>
	);
}
