import fs from "fs";
import Link from "next/link";

import matter from 'gray-matter';

function getPostMetadata() {
	const folder = "posts/";
	const files = fs.readdirSync(folder);
	const markdownPosts = files.filter((file) => file.endsWith(".md"));

	const posts = markdownPosts.map((fileName) => {
		const contents = fs.readFileSync(`posts/${fileName}`);
		const metadata = matter(contents);

		return {
			title: metadata.data.title,
			date: metadata.data.date,
			subtitle: metadata.data.subtitle,
			slug: fileName.replace('.md', ''),
		};
	});

	return posts;
}

export async function getStaticProps() {
	const postMetadata = getPostMetadata();
  return {
    props: {
      posts : postMetadata,
    },
  }
}

export default function Blog({posts}) {
	return (
		<>
			<div className="textBody">
				<h1>Hello from the blog!</h1>

				<div>
					<ul>
						{posts.map((data, index) => (
							<li key={index}>
								<Link href={`/blog/${data.slug}`}>
									<h2>{data.title}</h2>
								</Link>
								<p>{data.subtitle}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}