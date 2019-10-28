import { Villa } from '../models/villa';
export class VillaSale {
    id: number;
    gia: number;
    ngayhethan: Date;
    trangthai: boolean;
    huongnha: string;
    chieudai: number;
    chieurong: number;
    dientich: number;
    dientichtongsan: number;
    sotang: number;
    phongngu: number;
    beboi: boolean;
    garage: boolean;
    sanvuon: boolean;
    phongtam: number;
    diachi: Text;
    mota: Text;
    namxaydung: string;
    phaply: Text;
    user_id: number;
    images: string[];
}