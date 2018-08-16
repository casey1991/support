import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const MessageSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  data: { type: Schema.Types.Mixed },
  text: { type: String },
  type: { type: Number, required: true },
});
