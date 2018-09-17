import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ShopSchema = new mongoose.Schema({
  name: { type: Schema.Types.String, required: true },
  images: [{ type: Schema.Types.ObjectId, ref: 'File' }],
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  goods: [{ type: Schema.Types.ObjectId, ref: 'Goods' }],
  status: { type: Schema.Types.String, default: 'PRIVATE' },
});
