import connect from './_connect';
import User from './_user';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.setHeader('Allow', ['DELETE'])
      .status(405)
      .json({ message: 'Method not allowed' });
  }

  const { id } = req.query;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  await connect();

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'User deleted successfully',
      deletedUserId: deletedUser._id
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({
      message: 'Failed to delete user',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}