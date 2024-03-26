import Link from 'next/link'
import Image from 'next/image'

import styles from './CodeBlock.module.css'

export default function Footer({text, href, image}) {
	return (
		<>
			<Link className={styles.link} href={href}>
				<div 
					style={{backgroundImage: `url("${image}")`}}
					className={styles.codeBlock}>
						<div className={styles.overlay}>
							<div className={styles.text}>
								{text}
							</div>
						</div>
				</div>
			</Link>
		</>
	)
}