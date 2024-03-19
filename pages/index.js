import Link from 'next/link'
import Image from 'next/image'

import React, { useState, useEffect } from 'react'

import Header from '@components/Header'

import styles from '/components/index.module.css'; 

export default function Home() {
	// TODO dynamically populate this from a larger pool of images
	// TODO dynamically adjust viewable length to account for screen size
	// TODO calculate needed offset by position, not as an accumulator
	const [images, setImages] = useState([
		'monkey_face.jpg', // Copy of Final
		'rainier.jpg',
		'moab_traverse.jpg',
		'rappel.jpg',
		'25_short.jpg',
		'monkey_face.jpg',
		'rainier.jpg', // Begin Copies
		'moab_traverse.jpg', 
		'rappel.jpg',
		'25_short.jpg',
	]);
	
	useEffect(() => {
		let carousel = document.getElementById('carousel');
		let carouselImages = carousel.childNodes;
	
		// Position code
		let index = 1;
		let cumulativeSize = carouselImages[0].clientWidth;
		const updateSlideTransformX = () => {
			carousel.style.transform = `translateX(${-cumulativeSize}px)`;
		};
		
		// Animation code
		let durationAnimation = 1500; // ms
		let activeAnimation = `transform ${durationAnimation}ms ease-in-out`;
		const changeActiveAnimation = off => {
			carousel.style.transition = off === false ? "" : activeAnimation;
		};

		updateSlideTransformX();

		let interval = 6000;
		setInterval(function() {
			// enable animation
			if (index === 1) changeActiveAnimation()
		
			// to next slide
			cumulativeSize += carouselImages[index].clientWidth;
			index++;
			updateSlideTransformX();
			
			if (index >= carouselImages.length - 4) {
				index = 1;
				setTimeout(() => {
					// Disable animation & jump to slide 1
					changeActiveAnimation(false);
					cumulativeSize = carouselImages[0].clientWidth;
					updateSlideTransformX();
				}, durationAnimation);
			}
		}, interval);
		}, []);

	return (
	<>
		<div className={styles.carouselContainer}>
			<div id='carousel' className={styles.carousel}>
				{images.map((image, index) => (
					<img
						id = 'test_image'	
						key={index}
						src={`/carousel/${image}`}
						alt={`Image ${index + 1}`}
						className={styles.image}
					/>
				))}
			</div>
			<div className={styles.overlay}></div>
			<div className={styles.booking}>
					<h1>Ready for Adventure!</h1>
					<Link href="/schedule" className={styles.bookingButton}>Schedule Now!</Link>
			</div>
		</div>

		<div className={styles.textBody}>
			<em>The following is placeholder text, and does not reflect my actual services or certifications.</em>
			<h1>Climbing, Mountaineering, and Skiing</h1>
			<div>
				<p>
					Epic climbs, powder days, breathtaking views - that's the life we love, and I'm here to share it with you!
					I'm Daniel Ragsdale, a certified ski instructor and single pitch instructor based in Jackson Hole, Wyoming.
					Whether you're a first-timer yearning for fresh mountain air or a seasoned mountaineer seeking new challenges, I'm your guide to unforgettable mountain experiences.	
				</p>
				<h3>Services Offered:</h3>
				<ul>
					<li>
						<strong>Ski Instruction:</strong> Conquer the slopes of Jackson Hole.
						I tailor lessons to all levels, helping you refine your technique or discover the joy of skiing for the first time.
					</li>
					<li>
						<strong>Climbing Guiding:</strong> Scale new heights safely with expert guidance.
						I offer a variety of climbing experiences in Jackson Hole and beyond, from introductory top-roping to exhilarating multi-day expeditions.
						Together, let's reach the summit of your climbing goals.
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
