import styles from '@styles/code_index.module.css'; 

export default function Home() {
  return (
	<>
		<div className={styles.textBody}>
			<h1>Coding projects</h1>
			<p>
				When I am not exploring the mountains, I love to mess around with software development.
				Below are a collection of some of my interesting projects.
				Checkout my GitHub for more!
			</p>
		</div>
	</>
  )
}
