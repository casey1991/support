import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ArticleSchema = new mongoose.Schema({
  title: { type: Schema.Types.String, required: true },
  images: [{ type: Schema.Types.ObjectId, ref: 'File' }],
  content: Schema.Types.String,
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});
