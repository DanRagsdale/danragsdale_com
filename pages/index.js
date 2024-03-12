import Link from 'next/link'
import Image from 'next/image'

import Header from '@components/Header'

export default function Home() {
  return (
	<>
		<div className="carousel">
			<Image
				src="/carousel/rainier.jpg"
				width={438}
				height={600}
				quality={90}
				alt="Mt. Rainier"
			/>
			<Image
				src="/carousel/moab_traverse.jpg"
				width={800}
				height={600}
				quality={90}
				alt="Moab Utah"
			/>
			<Image
				src="/carousel/rappel.jpg"
				width={356}
				height={600}
				quality={90}
				alt="Rappelling in Custer State Park"
			/>
			<Image
				src="/carousel/25_short.jpg"
				width={929}
				height={600}
				quality={90}
				alt="Ski touring in Grand Teton National Park"
			/>
			<Image
				src="/carousel/monkey_face.jpg"
				width={623}
				height={600}
				quality={90}
				alt="Climbing Monkey Face at Smith Rock State Park"
			/>
		</div>
		<Header title="Welcome to danragsdale.com!" />
		<p className="description">
		
		<Link href="/second_page">Check out this other page!</Link>
		</p>
	</>
  )
}
