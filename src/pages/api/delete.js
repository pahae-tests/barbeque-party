import connect from './_connect';
import User from './_user';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { userID, applyID } = req.body;

  if (!userID || !applyID) {
    return res.status(400).json({ message: 'Missing userID or applyID' });
  }

  await connect();

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userID },
      { 
        $pull: { 
          applies: { _id: applyID } 
        } 
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User or apply entry not found' });
    }

    res.status(200).json({ 
      message: 'Apply deleted successfully',
      user: updatedUser
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      message: 'Failed to delete apply',
      error: error.message 
    });
  }
}