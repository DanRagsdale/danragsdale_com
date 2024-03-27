import fs from 'fs';
import Link from 'next/link';
import Image from 'next/image';

import matter from 'gray-matter';
import styles from '@styles/blog.module.css';

function getPostMetadata() {
	const folder = 'posts/';
	const files = fs.readdirSync(folder);
	const markdownPosts = files.filter((file) => file.endsWith('.md'));

	const posts = markdownPosts.map((fileName) => {
		const contents = fs.readFileSync(`posts/${fileName}`);
		const metadata = matter(contents);

		return {
			title: metadata.data.title,
			date: metadata.data.date,
			subtitle: metadata.data.subtitle,
			preview: metadata.data.preview,
			slug: fileName.replace('.md', ''),
		};
	});

	return posts;
}

export async function getStaticProps() {
	const postMetadata = getPostMetadata();
	postMetadata.sort((a, b) => (
		// We wanted newer posts (later alphabetically) to come first
		b.date.localeCompare(a.date)
	));

  return {
    props: {
      posts : postMetadata,
    },
  }
}

export default function Blog({posts}) {
	return (
		<>
			<div className='textBody'>
				<div className={styles.postList}>
					<ul>
						{posts.map((data, index) => (
							<li key={index}>
									<Link
										href={`/blog/${data.slug}`}
										className={styles.link}>
										<div className={styles.post}>
											<div>
												<h2>{data.title}</h2>
												<p>{data.subtitle}</p>
											</div>
											<Image
												id={index}
												src={`/posts/${data.preview}`}
												width={200}
												height={150}
												style={{marginLeft: "auto"}}
												alt="Placeholder image"/>
										</div>
									</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}