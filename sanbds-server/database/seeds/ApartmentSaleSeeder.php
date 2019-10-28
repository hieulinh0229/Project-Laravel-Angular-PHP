<?php

use Illuminate\Database\Seeder;

class ApartmentSaleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $apartmentSale = new App\Models\ApartmentSale;
        $apartmentSale->gia = 2.8;
        $apartmentSale->ngayhethan = "2019-10-10";
        $apartmentSale->trangthai = false;
        $apartmentSale->huongnha = "Đông Nam";
        $apartmentSale->chieudai = 25;
        $apartmentSale->chieurong = 20;
        $apartmentSale->dientich = 500;
        $apartmentSale->tenchungcu = "RIKITA";
        $apartmentSale->sotang = 2;
        $apartmentSale->phongngu = 3;
        $apartmentSale->phongtam = 3;
        $apartmentSale->diachi = "1  Tam Vương";
        $apartmentSale->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $apartmentSale->namxaydung = "2010";
        $apartmentSale->phaply = "Nhà có sổ đỏ";
        $apartmentSale->user_id = 10;
        $apartmentSale->district_id = 50;
        $apartmentSale->save();

        $apartmentSale = new App\Models\ApartmentSale;
        $apartmentSale->gia = 2;
        $apartmentSale->ngayhethan = "2019-10-10";
        $apartmentSale->trangthai = false;
        $apartmentSale->huongnha = " Nam";
        $apartmentSale->chieudai = 35;
        $apartmentSale->chieurong = 20;
        $apartmentSale->dientich = 700;
        $apartmentSale->tenchungcu = "MONOCO";
        $apartmentSale->sotang = 2;
        $apartmentSale->phongngu = 3;
        $apartmentSale->phongtam = 3;
        $apartmentSale->diachi = "135  Xuân Thiều";
        $apartmentSale->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $apartmentSale->namxaydung = "2010";
        $apartmentSale->phaply = "Nhà có sổ đỏ";
        $apartmentSale->user_id = 10;
        $apartmentSale->district_id = 50;
        $apartmentSale->save();
        $apartmentSale = new App\Models\ApartmentSale;
        $apartmentSale->gia = 2;
        $apartmentSale->ngayhethan = "2019-10-10";
        $apartmentSale->trangthai = false;
        $apartmentSale->huongnha = "Tây Nam";
        $apartmentSale->chieudai = 30;
        $apartmentSale->chieurong = 20;
        $apartmentSale->dientich = 600;
        $apartmentSale->tenchungcu = "TÂM BÙI";
        $apartmentSale->sotang = 2;
        $apartmentSale->phongngu = 3;
        $apartmentSale->phongtam = 3;
        $apartmentSale->diachi = "153  Nguyễn Lương Bằng";
        $apartmentSale->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $apartmentSale->namxaydung = "2010";
        $apartmentSale->phaply = "Nhà có sổ đỏ";
        $apartmentSale->user_id = 10;
        $apartmentSale->district_id = 50;
        $apartmentSale->save();

        $apartmentSale = new App\Models\ApartmentSale;
        $apartmentSale->gia = 3;
        $apartmentSale->ngayhethan = "2019-10-10";
        $apartmentSale->trangthai = false;
        $apartmentSale->huongnha = "Tây Nam";
        $apartmentSale->chieudai = 25;
        $apartmentSale->chieurong = 20;
        $apartmentSale->dientich = 500;
        $apartmentSale->tenchungcu = "QUANG LÊ";
        $apartmentSale->sotang = 2;
        $apartmentSale->phongngu = 3;
        $apartmentSale->phongtam = 3;
        $apartmentSale->diachi = "50  Xuân Thiều";
        $apartmentSale->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $apartmentSale->namxaydung = "2010";
        $apartmentSale->phaply = "Nhà có sổ hồng";
        $apartmentSale->user_id = 9;
        $apartmentSale->district_id = 50;
        $apartmentSale->save();

        $apartmentSale = new App\Models\ApartmentSale;
        $apartmentSale->gia = 4;
        $apartmentSale->ngayhethan = "2019-10-10";
        $apartmentSale->trangthai = false;
        $apartmentSale->huongnha = " Bắc";
        $apartmentSale->chieudai = 25;
        $apartmentSale->chieurong = 20;
        $apartmentSale->dientich = 500;
        $apartmentSale->tenchungcu = "VINGROUP";
        $apartmentSale->sotang = 2;
        $apartmentSale->phongngu = 3;
        $apartmentSale->phongtam = 3;
        $apartmentSale->diachi = "1  Tam Vương";
        $apartmentSale->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $apartmentSale->namxaydung = "2010";
        $apartmentSale->phaply = "Nhà có sổ đỏ";
        $apartmentSale->user_id = 10;
        $apartmentSale->district_id = 50;
        $apartmentSale->save();

        $apartmentSale = new App\Models\ApartmentSale;
        $apartmentSale->gia = 2;
        $apartmentSale->ngayhethan = "2019-10-10";
        $apartmentSale->trangthai = false;
        $apartmentSale->huongnha = "Đông Nam";
        $apartmentSale->chieudai = 15;
        $apartmentSale->chieurong = 20;
        $apartmentSale->dientich = 300;
        $apartmentSale->tenchungcu = "RIKITA";
        $apartmentSale->sotang = 2;
        $apartmentSale->phongngu = 3;
        $apartmentSale->phongtam = 3;
        $apartmentSale->diachi = "352  Bầu Tràm";
        $apartmentSale->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $apartmentSale->namxaydung = "2010";
        $apartmentSale->phaply = "Nhà có sổ đỏ";
        $apartmentSale->user_id = 10;
        $apartmentSale->district_id = 50;
        $apartmentSale->save();

        $apartmentSale = new App\Models\ApartmentSale;
        $apartmentSale->gia = 2.8;
        $apartmentSale->ngayhethan = "2019-10-10";
        $apartmentSale->trangthai = false;
        $apartmentSale->huongnha = " Nam";
        $apartmentSale->chieudai = 25;
        $apartmentSale->chieurong = 20;
        $apartmentSale->dientich = 500;
        $apartmentSale->tenchungcu = "MONOCO";
        $apartmentSale->sotang = 2;
        $apartmentSale->phongngu = 3;
        $apartmentSale->phongtam = 3;
        $apartmentSale->diachi = "1235  Nguyễn Lương Bằng";
        $apartmentSale->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $apartmentSale->namxaydung = "2010";
        $apartmentSale->phaply = "Nhà có sổ đỏ";
        $apartmentSale->user_id = 10;
        $apartmentSale->district_id = 50;
        $apartmentSale->save();


        $apartmentSale = new App\Models\ApartmentSale;
        $apartmentSale->gia = 2.6;
        $apartmentSale->ngayhethan = "2019-10-10";
        $apartmentSale->trangthai = false;
        $apartmentSale->huongnha = "Tây  Nam";
        $apartmentSale->chieudai = 25;
        $apartmentSale->chieurong = 20;
        $apartmentSale->dientich = 500;
        $apartmentSale->tenchungcu = "RIKITA";
        $apartmentSale->sotang = 2;
        $apartmentSale->phongngu = 3;
        $apartmentSale->phongtam = 3;
        $apartmentSale->diachi = "1  Tam Vương";
        $apartmentSale->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $apartmentSale->namxaydung = "2010";
        $apartmentSale->phaply = "Nhà có sổ đỏ";
        $apartmentSale->user_id = 10;
        $apartmentSale->district_id = 50;
        $apartmentSale->save();

        $apartmentSale = new App\Models\ApartmentSale;
        $apartmentSale->gia = 3;
        $apartmentSale->ngayhethan = "2019-10-10";
        $apartmentSale->trangthai = false;
        $apartmentSale->huongnha = "Đông Nam";
        $apartmentSale->chieudai = 25;
        $apartmentSale->chieurong = 20;
        $apartmentSale->dientich = 500;
        $apartmentSale->tenchungcu = "RIKITA";
        $apartmentSale->sotang = 2;
        $apartmentSale->phongngu = 3;
        $apartmentSale->phongtam = 3;
        $apartmentSale->diachi = "1  Tam Vương";
        $apartmentSale->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $apartmentSale->namxaydung = "2010";
        $apartmentSale->phaply = "Nhà có sổ đỏ";
        $apartmentSale->user_id = 10;
        $apartmentSale->district_id = 50;
        $apartmentSale->save();

        $apartmentSale = new App\Models\ApartmentSale;
        $apartmentSale->gia = 4;
        $apartmentSale->ngayhethan = "2019-10-10";
        $apartmentSale->trangthai = false;
        $apartmentSale->huongnha = "Đông Nam";
        $apartmentSale->chieudai = 25;
        $apartmentSale->chieurong = 20;
        $apartmentSale->dientich = 500;
        $apartmentSale->tenchungcu = "RIKITA";
        $apartmentSale->sotang = 2;
        $apartmentSale->phongngu = 3;
        $apartmentSale->phongtam = 3;
        $apartmentSale->diachi = "1  Tam Vương";
        $apartmentSale->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $apartmentSale->namxaydung = "2010";
        $apartmentSale->phaply = "Nhà có sổ đỏ";
        $apartmentSale->user_id = 10;
        $apartmentSale->district_id = 50;
        $apartmentSale->save();

        $apartmentSale = new App\Models\ApartmentSale;
        $apartmentSale->gia = 4.5;
        $apartmentSale->ngayhethan = "2019-10-10";
        $apartmentSale->trangthai = false;
        $apartmentSale->huongnha = "Đông Nam";
        $apartmentSale->chieudai = 25;
        $apartmentSale->chieurong = 20;
        $apartmentSale->dientich = 500;
        $apartmentSale->tenchungcu = "RIKITA";
        $apartmentSale->sotang = 2;
        $apartmentSale->phongngu = 3;
        $apartmentSale->phongtam = 3;
        $apartmentSale->diachi = "1  Tam Vương";
        $apartmentSale->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $apartmentSale->namxaydung = "2010";
        $apartmentSale->phaply = "Nhà có sổ đỏ";
        $apartmentSale->user_id = 10;
        $apartmentSale->district_id = 50;
        $apartmentSale->save();
    }
}
