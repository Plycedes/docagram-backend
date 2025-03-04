import mongoose, { Schema, Types, Document } from "mongoose";

export interface IUser extends Document {
    fullname: string;
    email: string;
    mobile: number;
    patient?: Types.ObjectId;
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
        patient: {
            type: Types.ObjectId,
        },
    },
    { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);
