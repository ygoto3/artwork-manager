// @flow

import mongoose, { Schema } from 'mongoose';

const Artwork = new Schema({
  _id: { type: Number, require: true, unique: true },
  title: { type: String, require: true },
  imageSource: { type: String, require: true },
  description: { type: String, require: true },
});

export default mongoose.model('artwork', Artwork);
