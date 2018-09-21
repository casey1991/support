import * as mongoose from 'mongoose';
// import * as mongoosastic from 'mongoosastic';
const Schema = mongoose.Schema;
export const GoodsSchema = new mongoose.Schema({
  name: { type: Schema.Types.String, required: true },
  price: { type: Schema.Types.Number, required: true },
  images: [{ type: Schema.Types.ObjectId, ref: 'File' }],
  amount: { type: Schema.Types.Number, required: true },
  type: { type: Schema.Types.Number, default: 0 }, // type: maybe private or shop? 0 for private 1 for shop
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
  owner: { type: Schema.Types.ObjectId, ref: 'User' }, // when type is private, goods should has owner user
  status: { type: Schema.Types.String, default: 'PRIVATE' }, // private & public
});

// GoodsSchema.plugin(mongoosastic);
