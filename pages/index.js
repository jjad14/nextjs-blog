import React from 'react';
import Head from 'next/head';

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../helpers/posts-util';

const HomePage = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Marlo's Blog</title>
				<meta
					name='description'
					content='Learn about web development - both front and back with frameworks like React, Angular, NodeJS and ASP.Net Core.'
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);
};

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts
		}
	};
}

export default HomePage;
