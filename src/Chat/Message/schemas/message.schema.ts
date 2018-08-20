import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;
export const MessageSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  room: { type: Schema.Types.ObjectId, required: true, ref: 'Room' },
  data: { type: Schema.Types.Mixed },
  text: { type: String },
  type: { type: Number, required: true },
});
MessageSchema.plugin(mongoosePaginate);
