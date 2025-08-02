import connect from './_connect';
import User from './_user';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await connect();

  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}