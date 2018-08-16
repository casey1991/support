import * as mongoose from 'mongoose';
import { MessageSchema } from './message.schema';
const Schema = mongoose.Schema;
export const RoomSchema = new mongoose.Schema({
  name: { type: Schema.Types.String, required: true, unique: true },
  avatar: { type: Schema.Types.ObjectId, ref: 'File' },
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  messages: [MessageSchema],
});
