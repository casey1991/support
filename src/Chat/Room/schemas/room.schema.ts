import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';

const Schema = mongoose.Schema;
export const RoomSchema = new mongoose.Schema({
  name: { type: Schema.Types.String, required: true },
  avatar: { type: Schema.Types.ObjectId, ref: 'File' },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  host: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

RoomSchema.plugin(mongoosePaginate);
