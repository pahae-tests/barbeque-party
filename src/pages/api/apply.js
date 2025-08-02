import connect from './_connect';
import User from './_user';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { userID, actor, aud } = req.body;
  console.log({ userID, actor })

  if (!userID || !actor || !aud) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  await connect();

  try {
    const user = await User.findOne({ _id: userID })
    if(user && user.applies.some(apply => apply.actor == actor)) {
      return res.status(400).json({ message: 'لقد سبق و أن سجلت لهذه الشخصية ! جرب أن تمسح المقطع من البروفيل' });
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: userID },
      { 
        $push: { 
          applies: { 
            actor, 
            aud,
            created_At: new Date() 
          } 
        } 
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Success', user: updatedUser });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
}