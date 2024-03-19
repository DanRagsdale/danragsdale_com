import Image from 'next/image'

import React, { useEffect } from 'react'

import styles from '@components/Carousel.module.css'; 

export default function Carousel({ images, animationDuration = 1500, interval = 6000 }) {
	// TODO dynamically populate this from a larger pool of images
	// TODO dynamically adjust viewable length to account for screen size
	// TODO allow for user provided alt text

	const endCopies = 5; // How many duplicate images are produced at the end. Used to hide the transition

	var repeatedImages = [...images];
	repeatedImages.unshift(...images.slice(-1));
	repeatedImages.push(...images.slice(0, endCopies));

	useEffect(() => {
		let carousel = document.getElementById('carousel');
		let carouselImages = carousel.childNodes;
	
		// Position code
		let index = 1;
		const updateSlideTransformX = amount => {
			carousel.style.transform = `translateX(${-amount}px)`;
		};
		
		// Animation code
		let activeAnimation = `transform ${animationDuration}ms ease-in-out`;
		const changeActiveAnimation = off => {
			carousel.style.transition = off === false ? "" : activeAnimation;
		};

		updateSlideTransformX(carouselImages[0].clientWidth);

		setInterval(function() {
			// enable animation
			if (index === 1) changeActiveAnimation()
			
			index++;
			var cumulativeSize = 0;
			for (let i = 0; i < index; i++) {
				cumulativeSize += carouselImages[i].clientWidth;
			}
			updateSlideTransformX(cumulativeSize);

			if (index >= carouselImages.length - endCopies) {
				index = 1;
				setTimeout(() => {
					// Disable animation & jump to slide 1
					changeActiveAnimation(false);
					updateSlideTransformX(carouselImages[0].clientWidth);
				}, animationDuration);
			}
		}, interval);
		}, []);

	return (
	<>
		<div className={styles.carouselContainer}>
			<div id='carousel' className={styles.carousel}>
				{repeatedImages.map((image, index) => (
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
		</div>
	</>
	)
}
