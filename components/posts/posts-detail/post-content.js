import React from 'react';
import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';
import PostHeader from './post-header';

const DUMMY_POST = {
	title: 'NextJS Guide',
	image: 'default-placeholder.png',
	date: '2021-11-22',
	slug: 'default-placeholder',
	content: '# This is a first post'
};

const PostContent = () => {
	const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
	return (
		<article className={classes.content}>
			<PostHeader title={DUMMY_POST.title} image={imagePath} />
			<ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
		</article>
	);
};

export default PostContent;
