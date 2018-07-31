import * as mongoose from 'mongoose';
export const FileSchema = new mongoose.Schema({
  mimetype: { type: String, required: true },
  name: { type: String, required: true },
  fileMeta: { type: String, required: true }, // file url
  size: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});
