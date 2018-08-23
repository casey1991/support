import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ItemSchema = new mongoose.Schema({
  name: Schema.Types.String,
  price: Schema.Types.Number,
});
