import fs from 'fs';

import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

export async function getStaticPaths() {
	const folder = "posts/";
	const files = fs.readdirSync(folder);
	const posts = files.filter((file) => file.endsWith(".md"));
	const slugs = posts.map((file) => file.replace(".md", ""));

	return {
		paths: 
			slugs.map((s) => (
				{
					params: {
						slug: s,
					},
				}
			))
		,
		fallback: false, // false or "blocking"
	}
}

export async function getStaticProps({ params }) {
	const folder ="posts/";
	const file = `${folder}${params.slug}.md`;
	const raw = fs.readFileSync(file, 'utf8');
	return {
		props: {
			slug : params.slug,
			raw : raw,
		},
	}
}

export default function Post({slug, raw}) {
	const post = matter(raw);
	return (
		<>
			<div className='textBody'>
				<h1>{post.data.title}</h1>
				<Markdown>
					{post.content}
				</Markdown>	
			</div>
		</>
	);
}