import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ShopSchema = new mongoose.Schema({
  name: { type: Schema.Types.String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  goods: [{ type: Schema.Types.ObjectId, ref: 'Goods' }],
});
