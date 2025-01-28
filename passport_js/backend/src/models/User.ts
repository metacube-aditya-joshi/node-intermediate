import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: '',
  },
  socialProvider: {
    type: String,
    enum: ['google', 'facebook', 'twitter'],
    required: true,
  },
  socialId: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('User', userSchema);