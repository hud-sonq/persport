import { Schema, model } from 'mongoose';
import type { Document } from 'mongoose';

export interface WeatherDocument extends Document {
    city: string;
    temperature: number;
    description: string;
    owner: string;
}

const WeatherSchema = new Schema(
    {
        city: {
            type: String,
            required: true,
        },
        temperature: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    },
    {
        timestamps: true,
    }
);

export const Weather = model<WeatherDocument>('Weather', WeatherSchema);