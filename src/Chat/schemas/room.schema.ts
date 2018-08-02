import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const RoomSchema = new mongoose.Schema({
  name: { type: Schema.Types.String, required: true, unique: true },
  avatar: { type: Schema.Types.ObjectId, ref: 'File' },
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});
