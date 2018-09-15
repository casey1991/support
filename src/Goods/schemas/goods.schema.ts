import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const GoodsSchema = new mongoose.Schema({
  name: Schema.Types.String,
  price: Schema.Types.Number,
  amount: Schema.Types.Number,
  type: Schema.Types.Number, // type: maybe private or shop?
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
  owner: { type: Schema.Types.ObjectId, ref: 'User' }, // when type is private, goods should has owner user
});
