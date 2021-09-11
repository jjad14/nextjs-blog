import React from 'react';
import Head from 'next/head';
import ContactForm from '../../components/contact/contact-form';

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact Me</title>
				<meta
					name='description'
					content='Have a question? Send me your question'
				/>
			</Head>
			<ContactForm />
		</>
	);
};

export default ContactPage;
