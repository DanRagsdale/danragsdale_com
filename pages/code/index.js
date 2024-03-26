import styles from '@styles/code/index.module.css'; 

import CodeBlock from '@components/CodeBlock'

export default function Home() {
  return (
	<>
		<div className='textBody'>
			<h1>Coding projects</h1>
			<p>
				When I am not exploring the mountains, I love to mess around with software development.
				Below are a collection of some of my interesting projects.
				Checkout my GitHub for more!
			</p>
		</div>
		<div className='textBody' style={{maxWidth: "initial", width : "90%"}}>
			<div className={styles.gridContainer}>
				<CodeBlock href="/code/pace" text="Pace Calculator" image="/running.jpg"/>
			</div>
		</div>
	</>
  )
}
