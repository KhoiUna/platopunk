import Script from 'next/script';

const BEAM_DATA_TOKEN = '5588c823-5a2e-4223-ae81-2b4259a40c16';

export default function Analytics() {
	if (process.env.NODE_ENV !== 'production') return <></>;

	return (
		<>
			{/* Beam Analytics */}
			<Script
				async
				strategy='afterInteractive'
				src='https://beamanalytics.b-cdn.net/beam.min.js'
				data-token={BEAM_DATA_TOKEN}
			/>
		</>
	);
}
