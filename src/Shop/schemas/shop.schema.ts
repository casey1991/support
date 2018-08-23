import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ShopSchema = new mongoose.Schema({
  name: Schema.Types.String,
  host: { type: Schema.Types.ObjectId, ref: 'User' },
});
