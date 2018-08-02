import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  avatar: { type: Schema.Types.ObjectId, ref: 'File' },
  roles: { type: Array, default: ['user'] },
  createdAt: { type: Date, default: Date.now },
  password: { type: String, required: true },
});
