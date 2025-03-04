import mongoose, { Schema, Types, Document } from "mongoose";
import jwt from "jsonwebtoken";

export interface IUser extends Document {
    fullname: string;
    email: string;
    mobile: number;
}

const userSchema = new Schema<IUser>(
    {
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        mobile: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);
