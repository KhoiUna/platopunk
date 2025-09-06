import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects',
};

export default function ProjectsPage() {
	return (
		<div className='p-4'>
			<h1 className='text-2xl sm:text-4xl font-thin pt-20 max-w-3xl leading-loose mb-16'>
				Latest <b>Projects</b>
			</h1>

			<div className='space-y-12 max-w-4xl'>
				<div className='border-l-4 border-gray-300 pl-6'>
					<h2 className='text-xl sm:text-2xl font-thin mb-3'>
						<a
							href='https://lipsql.platopunk.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:underline'
						>
							<b>LipSQL</b>
						</a>
					</h2>
					<p className='text-gray-600 mb-4 leading-relaxed'>
						A clean and simple SQL interface for database management
						and query execution using natural language.
					</p>
				</div>

				<div className='border-l-4 border-gray-300 pl-6'>
					<h2 className='text-xl sm:text-2xl font-thin mb-3'>
						<a
							href='https://bunnybits.platopunk.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:underline'
						>
							<b>BunnyBits</b>
						</a>
					</h2>
					<p className='text-gray-600 mb-4 leading-relaxed'>
						AI-powered learning platform that saves hours of manual
						flashcard creation while maintaining high-quality
						content. Features contextualized practice quizzes for
						effective learning.
					</p>
				</div>
			</div>

			<div className='-z-10 bg-gray-100 absolute bottom-0 right-10 h-[30rem] w-[30rem] rounded-full animate-bounce' />
		</div>
	);
}
