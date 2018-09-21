import * as mongoose from 'mongoose';
import * as mongoosastic from 'mongoosastic';
const Schema = mongoose.Schema;
export const CategorySchema = new mongoose.Schema({});
CategorySchema.plugin(mongoosastic, { hosts: ['localhost:9200'] });
