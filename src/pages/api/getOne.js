import connect from './_connect';
import User from './_user';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { userID } = req.query;

  if (!userID) {
    return res.status(400).json({ message: 'Missing userID' });
  }

  await connect();

  try {
    const user = await User.findById(userID).select('applies');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const audios = user.applies.map(apply => ({
      _id: apply._id,
      actor: apply.actor,
      aud: apply.aud,
    }));

    res.status(200).json({ audios });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
}