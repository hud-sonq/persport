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
            required: false,
        },
        company: {
            type: String,
            required: false,
        },
        contact: {
            type: String,
            required: false,
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