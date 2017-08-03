// @flow

import mongoose from 'mongoose';
const { Schema } = mongoose;

const User = new Schema({
  name: { type: String, require: true, unique: true },
  password: { type: String, require: true }
});

export default mongoose.model('user', User);
