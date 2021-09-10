import React from 'react';
import Link from 'next/link';

import classes from './navbar.module.css';
import Logo from './logo';

const Navbar = () => {
	return (
		<header className={classes.header}>
			<Link href='/'>
				<a>
					<Logo />
				</a>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href='/posts'>Posts</Link>
					</li>
					<li>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
