import { Schema, model } from 'mongoose';
import type { Document } from 'mongoose';

export interface WeatherDocument extends Document {
    city: string;
    owner: string;
}

const WeatherSchema = new Schema(
    {
        city: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false,
        }
    },
    {
        timestamps: true,
    }
);

export const Weather = model<WeatherDocument>('Weather', WeatherSchema);