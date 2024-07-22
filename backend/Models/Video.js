import mongoose, { Schema } from "mongoose";
const VideoSchema = new Schema({
    userId: { type: String, required: true },

    title: { type: String, required: true },

    desc: { type: String, required: true },

    imgUrl: { type: String },
    videoUrl: { type: String },
    views: { type: Number, default: 0 },
    tags: { type: [String], default: [] },
    likes: { type:[String], default: []},
    deslikes: { type:[String], default: [] },

    subscribers: {
        type: Number,
        default: 0
    },




},
    {
        timestamps: true

    })
const Video = mongoose.model("Video", VideoSchema);
export default Video;