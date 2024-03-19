import Link from 'next/link'
import Image from 'next/image'

import styles from './NavBar.module.css'

export default function Footer() {
	return (
	<div className={styles.nav_bar}>
		<ul>
			<li>
				<Link href="/">
					<Image
						src="/logo.png"
						width={110}
						height={80}
						alt="DanRagsdale.com Logo"/>
				</Link>
			</li>
			<li><Link href="/climb"><span className={styles.center}>Climb</span></Link></li>
			<li><Link href="/ski"><span className={styles.center}>Ski</span></Link></li>
			
			<li style={{float:"right"}}><Link href="/second_page"><span className={styles.center}>Blog</span></Link></li>
			<li style={{float:"right"}}><Link href="/code"><span className={styles.center}>Code</span></Link></li>
		</ul>
	</div>
	)
}
