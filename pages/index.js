import Link from 'next/link'

import Carousel from '@components/Carousel'

import styles from '@styles/index.module.css'; 

export default function Home() {
	return (
	<>
		<div>
			<Carousel 
				images={[
					'rainier.jpg',
					'moab_traverse.jpg',
					'rappel.jpg',
					'25_short.jpg',
					'monkey_face.jpg',]}
			/>

			<div className={styles.booking}>
					<h1>Ready for Adventure!</h1>
					<Link href="/schedule" className={styles.bookingButton}>Schedule Now!</Link>
			</div>
		</div>
		<div className={styles.textBody}>
			<em>The following is placeholder text, and does not reflect my actual services or certifications.</em>
			<h1>Climbing, Skiing, Mountaineering</h1>
			<div>
				<p>
					Epic climbs, powder days, breathtaking views - that's the life we love, and I'm here to share it with you!
					I'm Daniel Ragsdale, a certified ski instructor and single pitch instructor based in Jackson Hole, Wyoming.
					Whether you're a first-timer yearning for fresh mountain air or a seasoned mountaineer seeking new challenges, I'm your guide to unforgettable mountain experiences.	
				</p>
				<h3>Services Offered:</h3>
				<ul>
					<li>
						<strong>Climbing Guiding:</strong> Scale new heights safely with expert guidance.
						I offer a variety of climbing experiences in Jackson Hole and beyond, from introductory top-roping to exhilarating multi-day expeditions.
						Together, let's reach the summit of your climbing goals.
					</li>
					<li>
						<strong>Ski Instruction:</strong> Conquer the slopes of Jackson Hole.
						I tailor lessons to all levels, helping you refine your technique or discover the joy of skiing for the first time.
					</li>
					<li>
						<strong>Mountaineering:</strong> Embark on an unforgettable journey through breathtaking landscapes.
						My mountaineering services unlock the true wilderness experience, with expert planning and safety protocols to ensure a successful and thrilling adventure.
					</li>
				</ul>
				Ready to test your strength, conquer a peak, or explore the backcountry?
			</div>
			<div>
				<Link href="/schedule" className={styles.bottomBookingButton}>Let's plan your mountain adventure!</Link>
			</div>
		</div>
	</>
	)
}
