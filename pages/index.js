import Link from 'next/link'
import Image from 'next/image'

import Header from '@components/Header'

export default function Home() {
  return (
	<>
		<div className="carousel">
			<Image
				src="/rainier.jpg"
				width={902}
				height={600}
				quality={90}
				alt="Mt. Rainier"
			/>
			<Image
				src="/rappel.jpg"
				width={356}
				height={600}
				quality={90}
				alt="Rappelling in Custer State Park"
			/>
		</div>
		<Header title="Welcome to danragsdale.com!" />
		<p className="description">
		
		<Link href="/second_page">Check out this other page!</Link>
		</p>
	</>
  )
}
