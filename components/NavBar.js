import Link from 'next/link'

import styles from './NavBar.module.css'

export default function Footer() {
  return (
	<div className={styles.nav_bar}>
		<ul>
			<li><Link href="/climb" className={styles.nav_link}>Climb</Link></li>
			<li><Link href="/ski" className={styles.nav_link}>Ski</Link></li>
			<li><Link href="/code" className={styles.nav_link}>Code</Link></li>
			<li style={{float:"right"}}><Link href="/second_page" className={styles.nav_link}>Blog</Link></li>
		</ul>
	</div>
  )
}
