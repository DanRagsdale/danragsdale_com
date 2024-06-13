import Link from 'next/link'

import Carousel from '@components/Carousel'

import styles from '@styles/index.module.css'; 

export default function Home() {
	return (
	<>
		<Carousel 
			images={[
				'rainier.jpg',
				'franz.jpg',
				'moab_traverse.jpg',
				'rappel.jpg',
				'25_short.jpg',
				'monkey_face.jpg',]}
		>
			<div className={styles.booking}>
					<h1>Ready for Adventure!</h1>
					<Link href="/schedule" className={styles.bookingButton}>Schedule Now!</Link>
			</div>
		</Carousel>

		<div className={styles.textBody}>
			<h1>Climbing, Skiing, Mountaineering</h1>
			<div>
				<p>
					Epic climbs, powder days, breathtaking views - that's the life we love, and I'm here to share it with you!
					I'm Daniel Ragsdale, a certified ski instructor and single pitch instructor based in Jackson Hole, Wyoming.
					Whether you're a first-timer yearning for fresh mountain air or a seasoned mountaineer seeking new challenges, I'm your guide to unforgettable mountain experiences.	
				</p>
				<h2>Trips Offered:</h2>
				<ul>
					<li>
						<h3 className={styles.tripOption}>Via Ferrata</h3> 
						Join me on an exhilarating via ferrata journey through the rugged beauty of Jackson Hole! 
						As your personal guide, I'll lead you along steep faces, bridges, and cliffside paths, ensuring your safety while maximizing the adventure. 
						Whether you're a climbing enthusiast or a novice eager to explore, this customized trip promises an unforgettable blend of adrenaline and awe-inspiring views.
					</li>
					<li>
						<h3 className={styles.tripOption}>Top Rope Climbing</h3>
						Top rope climbing is the perfect way to learn new skills and test your strength in a safe environment.
						As your instructor, I will select routes to meet your goals and find the perfect blend of challenge and reward.
						Enjoy the thrill of climbing and the beauty of the outdoors with the security of a top rope and a certified single pitch instructor.

					</li>
					<li>
						<h3 className={styles.tripOption}>Ski Instruction</h3> 
						I offer ski lessons in Jackson Hole for all ability levels.
					</li>
				</ul>
				Ready for the ultimate adventure?
			</div>
			<div>
				<Link href="/schedule" className={styles.bottomBookingButton}>Let's plan your mountain adventure!</Link>
			</div>
		</div>
	</>
	)
}
