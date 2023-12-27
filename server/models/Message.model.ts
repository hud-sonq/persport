import { Schema, model } from 'mongoose';
import type { Document } from 'mongoose';

export interface MessageDocument extends Document {
    name: string;
    company: string;
    contact: string;
    message: string;
}

const messageSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Message = model<MessageDocument>('Message', messageSchema);