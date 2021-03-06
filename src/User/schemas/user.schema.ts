import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  roles: { type: Array, default: ['user'] },
  createdAt: { type: Date, default: Date.now },
  password: { type: String, required: true },
});
