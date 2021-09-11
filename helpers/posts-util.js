import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// A file which will have extra utility functionality for fetching post data and for extracting metadata from those markdown files

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts');

// get the data for a single post
const getPostData = (fileName) => {
	const filePath = path.join(POSTS_DIRECTORY, fileName);
	const fileContent = fs.readFileSync(filePath, 'utf-8');

	// data property for the metadata as an object
	// content property which contains the markdown text as a string
	const { data, content } = matter(fileContent);

	// remove file extension from post markdown file (.md)
	const postSlug = fileName.replace(/\.md$/, '');

	// contains all that metadata, content and a slug field
	const postData = {
		slug: postSlug,
		...data,
		content
	};

	return postData;
};

export const getAllPosts = () => {
	// read all files inside posts folder
	const postFiles = fs.readdirSync(POSTS_DIRECTORY);

	// map postfiles, return an object of that post file into an array
	const allPosts = postFiles.map((postFile) => {
		return getPostData(postFile);
	});

	// sort posts by recent
	const sortedPosts = allPosts.sort((postA, postB) =>
		postA.date > postB.date ? -1 : 1
	);

	return sortedPosts;
};

export const getFeaturedPosts = () => {
	// get all posts
	const allPosts = getAllPosts();

	// filter by featured
	const featuredPosts = allPosts.filter((post) => post.isFeatured);

	return featuredPosts;
};
