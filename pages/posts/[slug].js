import React from 'react';
import PostContent from '../../components/posts/posts-detail/post-content';

import { getPostData, getPostFiles } from '../../helpers/posts-util';

const PostDetailPage = ({ post }) => {
	return <PostContent post={post} />;
};

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData
		},
		revalidate: 600
	};
}

export function getStaticPaths() {
	const postFileNames = getPostFiles();
	const slugs = postFileNames.map((fileName) =>
		fileName.replace(/\.md$/, '')
	);

	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false
	};
}

export default PostDetailPage;
