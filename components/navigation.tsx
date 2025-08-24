import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
	return (
		<nav className='flex items-center justify-between'>
			<Link href={'/'} className='px-4 py-2 flex items-center space-x-1'>
				<Image
					src={'/images/android-chrome-192x192.png'}
					alt='Logo'
					width={80}
					height={80}
				/>
			</Link>
		</nav>
	);
}
