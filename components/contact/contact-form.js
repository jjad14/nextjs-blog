import React, { useState } from 'react';

import classes from './contact-form.module.css';

const ContactForm = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	const sendMessageHandler = (e) => {
		e.preventDefault();

		fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({ email, name, message }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	};

	return (
		<section className={classes.contact}>
			<h2>Do you Have a question?</h2>
			<form className={classes.form} onSubmit={sendMessageHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor='email'>Your Email</label>
						<input
							type='email'
							id='email'
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor='name'>Your Name</label>
						<input
							type='text'
							id='name'
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor='message'>Your message</label>
					<textarea
						name='message'
						id='message'
						rows='5'
						required
						value={message}
						onChange={(e) => setMessage(e.target.value)}></textarea>
				</div>
				<div className={classes.actions}>
					<button type='submit'>Send Message</button>
				</div>
			</form>
		</section>
	);
};

export default ContactForm;
