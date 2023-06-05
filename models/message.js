import mongoose from "mongoose";

// schema
const messageSchema = mongoose.Schema({
  name: String,
  email: String,
});

// Model
export const Message = mongoose.model("Message", messageSchema);
