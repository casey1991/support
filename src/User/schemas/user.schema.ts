import * as mongoose from 'mongoose';
import * as mongoosastic from 'mongoosastic';
const Schema = mongoose.Schema;
export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, es_indexed: true },
  email: { type: String, unique: true, required: true, es_indexed: true },
  avatar: { type: Schema.Types.ObjectId, ref: 'File', es_indexed: true },
  roles: { type: Array, default: ['user'], es_indexed: true },
  createdAt: { type: Date, default: Date.now },
  password: { type: String, required: true },
});
UserSchema.plugin(mongoosastic, { hosts: ['localhost:9200'] });
