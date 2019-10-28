import { Image } from './image';

export class Plot {
    name: string;
    width: number;
    height: number;
    area: number;
    address: string;
    images: Image[];
    province: {name: string};
}
