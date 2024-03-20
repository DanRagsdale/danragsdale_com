import Link from 'next/link'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
				<Link href="https://venmo.com/u/DanRagsdale"><img src="/logo-venmo.svg" alt="Venmo Logo" className={styles.logo} style={{marginRight:"0px"}}/></Link>
				<Link href="https://instagram.com/DanRagsdale"><img src="/logo-instagram.svg" alt="Instagram Logo" className={styles.logo} /></Link>
				<Link href="https://github.com/DanRagsdale"><img src="/logo-github.svg" alt="Github Logo" className={styles.logo} /></Link>
      </footer>
    </>
  )
}
