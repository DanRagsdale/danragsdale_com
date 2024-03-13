import Link from 'next/link'
import Image from 'next/image'

import React, { useState, useEffect } from 'react'

import Header from '@components/Header'

import styles from '/components/index.module.css'; 

export default function Home() {
	// TODO dynamically populate this from a larger pool of images
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
		let durationAnimation = 1000; // ms
		let activeAnimation = `transform ${durationAnimation}ms ease-in-out`;
		const changeActiveAnimation = off => {
			carousel.style.transition = off === false ? "" : activeAnimation;
		};

		updateSlideTransformX();

		let interval = 5000;
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

		<Header title="Welcome to danragsdale.com!" />
		<p className="description">
			<Link href="/second_page">Check out this other page!</Link>
		</p>
	</>
	)
}
