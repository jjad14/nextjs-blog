import React from 'react';

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

const DUMMY_POSTS = [
	{
		title: 'React Guide',
		image: 'default-placeholder.png',
		excerpt:
			'React is a popular client side javascript library made by Facebook. Learn to make modern and stylish web application with it!',
		date: '2021-05-03',
		slug: 'default-placeholder'
	},
	{
		title: 'Angular Guide',
		image: 'default-placeholder.png',
		excerpt:
			'Angular is a popular client side javascript framework made by Google. Learn to make modern and stylish web application with it!',
		date: '2021-08-11',
		slug: 'default-placeholder'
	},
	{
		title: 'NodeJS Guide',
		image: 'default-placeholder.png',
		excerpt:
			'A popular backend framework for creating APIs. Pair it with your favorite front-end framework!',
		date: '2021-03-09',
		slug: 'default-placeholder'
	},
	{
		title: 'NextJS Guide',
		image: 'default-placeholder.png',
		excerpt:
			'NexJS ia a React Framework for production - it makes building full stack React application much easier! A must if SSR is important for your next application.',
		date: '2021-11-22',
		slug: 'default-placeholder'
	},
	{
		title: 'ASP.NET Core Guide',
		image: 'default-placeholder.png',
		excerpt:
			'A C# based framework used to build full stack web application.',
		date: '2021-06-10',
		slug: 'default-placeholder'
	}
];

const HomePage = () => {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</>
	);
};

export default HomePage;

// 1. Hero => Present Ourselves
// 2. Featured Posts
