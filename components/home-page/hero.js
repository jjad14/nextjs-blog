import React from 'react';
import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/user.png'
					alt='An image showing Dennis'
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I'm Dennis</h1>
			<p>
				Learn about web development - both front and back with
				frameworks like React, Angular, NodeJS and ASP.Net Core.
			</p>
		</section>
	);
};

export default Hero;
