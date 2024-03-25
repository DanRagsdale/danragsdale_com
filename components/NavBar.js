import Link from 'next/link'
import Image from 'next/image'

import React, { useEffect, useState } from 'react'

import styles from './NavBar.module.css'

export default function NavBar() {
	const defaultWidth = 100;
	const aspectRatio = 452 / 652;

  const [imSize, setImSize] = useState({
    width: defaultWidth,
    height: defaultWidth * aspectRatio,
  });

	useEffect(() => {
    function handleResize() {
			var newWidth = Math.max(Math.min(window.innerWidth * 0.04, 100), 40);
      setImSize({
        width: newWidth,
        height: newWidth * aspectRatio,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

	return (
		<div className={styles.nav_bar}>
			<ul>
				<li>
					<Link href="/">
						<div className={styles.center}>
							<Image
								id="TestId"
								src="/logo.png"
								width={imSize.width}
								height={imSize.height}
								alt="DanRagsdale.com Logo"/>
						</div>
					</Link>
				</li>
				<li><Link href="/climb"><div className={styles.center}>Climb</div></Link></li>
				<li><Link href="/ski"><div className={styles.center}>Ski</div></Link></li>

				<li style={{marginLeft:"auto"}}><Link href="/code"><div className={styles.center}>Code</div></Link></li>
				<li><Link href="/"><div className={styles.center}>Blog</div></Link></li>
			</ul>
		</div>
	)
}
