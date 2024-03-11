import Head from 'next/head'

import Header from '@components/Header'
import Footer from '@components/Footer'
import NavBar from '@components/NavBar'

export default function Layout({ children }) {
	return <>
		<div className="container">
			<Head>
				<title>DanRagsdale</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar />
			<main>
				{children}
			</main>
		  
			<Footer />
		</div>
	</>
}