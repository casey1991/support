import * as mongoose from 'mongoose';
import { ItemSchema } from './item.schema';
const Schema = mongoose.Schema;
export const DealSchema = new mongoose.Schema({
  items: [{ type: ItemSchema, required: true }],
  host: { type: Schema.Types.ObjectId, ref: 'User' },
  shop: { type: Schema.Types.ObjectId, ref: 'Shop' },
});
