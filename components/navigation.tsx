import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
	return (
		<nav className='flex items-center justify-between'>
			<Link href={'/'} className='px-4 py-2 flex items-center space-x-1'>
				<Image
					src={'/images/platopunk.webp'}
					alt='Logo'
					width={50}
					height={50}
				/>
				<p>PlatoPunk</p>
			</Link>
			<Link
				href={'/projects'}
				className='px-4 py-2 hover:underline transition-colors rounded-lg'
			>
				Projects
			</Link>
		</nav>
	);
}
