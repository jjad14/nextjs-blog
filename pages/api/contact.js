import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
	if (req.method == 'POST') {
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			res.status(422).json({ message: 'Invalid form input' });
			return;
		}

		const newMessage = {
			email,
			name,
			message
		};

		let client;

		try {
			client = await MongoClient.connect(process.env.MY_MONGO_URI);
		} catch (error) {
			res.status(500).json({ message: 'Could not connect to database' });
			return;
		}

		const db = client.db();

		try {
			const result = await db
				.collection('messages')
				.insertOne(newMessage);

			newMessage.id = result.insertedId;
		} catch (error) {
			client.close();
			res.status(500).json({ message: 'Could not connect to database' });
			return;
		}

		client.close();

		res.status(201).json({
			message: 'Successfully sent message',
			message: newMessage
		});
	}
};

export default handler;
