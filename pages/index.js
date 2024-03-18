import Link from 'next/link'
import Image from 'next/image'

import React, { useState, useEffect } from 'react'

import Header from '@components/Header'

import styles from '/components/index.module.css'; 

export default function Home() {
	// TODO dynamically populate this from a larger pool of images
	// TODO dynamically adjust viewable length to account for screen size
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
					<h1>Let's have an adventure!</h1>
					<Link href="/schedule" className={styles.bookingButton}>Schedule Now!</Link>
			</div>
		</div>
		<div className={styles.textBody}>
			<Header title="Welcome to danragsdale.com!" />
			<p className="description">
				<Link href="/schedule">Check out this other page!</Link>
			</p>
		</div>
	</>
	)
}
