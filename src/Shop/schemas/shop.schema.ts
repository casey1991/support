import * as mongoose from 'mongoose';
import * as mongoosastic from 'mongoosastic';
const Schema = mongoose.Schema;
export const ShopSchema = new mongoose.Schema({
  name: { type: Schema.Types.String, required: true, es_indexed: true },
  images: [{ type: Schema.Types.ObjectId, ref: 'File', es_indexed: true }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    es_indexed: true,
  },
  goods: [{ type: Schema.Types.ObjectId, ref: 'Goods', es_indexed: true }],
  status: { type: Schema.Types.String, default: 'PRIVATE' },
});
ShopSchema.plugin(mongoosastic, { hosts: ['localhost:9200'] });
