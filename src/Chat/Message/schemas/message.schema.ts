import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;
/**
 * status:this schema we don't have status directly
 *        when room users all in viewed, the stauts is viewed else the stauts is default(received)
 *        sending status is just for front ui show
 */
export const MessageSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  room: { type: Schema.Types.ObjectId, required: true, ref: 'Room' },
  data: { type: Schema.Types.Mixed },
  text: { type: String },
  createdAt: { type: Date, default: Date.now },
  type: { type: Number, required: true },
  viewed: [{ type: Schema.Types.ObjectId, required: true, ref: 'User' }],
});
MessageSchema.plugin(mongoosePaginate);
