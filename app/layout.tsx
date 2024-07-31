import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { BRAND_NAME, BRAND_URL } from './config';
import Analytics from '@/components/analytics';
import Navigation from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

const description =
	'PlatoPunk is a software development studio shipping minimalistic software to the world.'.slice(
		0,
		160
	);

export const metadata: Metadata = {
	title: {
		default: `Home | ${BRAND_NAME}`,
		template: `%s | ${BRAND_NAME}`,
	},
	description,
	metadataBase: new URL(BRAND_URL),
	openGraph: {
		title: `Home | ${BRAND_NAME}`,
		description,
		url: BRAND_URL,
		siteName: `${BRAND_NAME}`,
		images: [
			{
				url: '/images/plato.jpg',
				width: 512,
				height: 512,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Analytics />

			<body className={inter.className}>
				<Navigation />

				<main>{children}</main>
			</body>
		</html>
	);
}
