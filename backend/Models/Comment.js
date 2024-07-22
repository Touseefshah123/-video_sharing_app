
import mongoose, { Schema } from "mongoose";
const commentSchema = new Schema({
    userId: { type: String, required: true },

    videoId: { type: String, required: true },

    desc: { type: String, required: true },

  
  },  {
        timestamps: true

    })
const comments = mongoose.model("comment",commentSchema);
export default comments;