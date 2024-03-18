import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import Link from 'next/link';

export default function FirstPost() {
  return (
		<>
			<Header title="Welcome to the second page!" />
			<h1>First Post</h1>
			<h2><Link href="/">Back to home</Link></h2>
			<p>
				Is this working? I hope so
	  		</p>
	  </>
  );
}