import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  sex: { type: String, required: true },
  age: { type: Number, required: true },
  tel: { type: String, required: true },
  applies: [{
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    actor: { type: Number, required: true },
    aud: { type: String, required: true },
    created_At: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;