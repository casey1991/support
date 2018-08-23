import * as mongoose from 'mongoose';
import { ItemSchema } from './item.schema';
const Schema = mongoose.Schema;
export const ShopSchema = new mongoose.Schema({
  name: { type: Schema.Types.String, required: true },
  host: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{ type: ItemSchema }],
});
