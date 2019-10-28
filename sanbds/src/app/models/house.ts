import { Image } from './image';

export class House {
    name: string;
    bedrooms: number;
    bathrooms: number;
    floors: number;
    width: number;
    height: number;
    area: number;
    address: string;
    images: Image[];
    province: {name: string};
}
