<?php

use Illuminate\Database\Seeder;

class HouseRentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $houseRent = new App\Models\HouseRent();
        $houseRent->gia = 2;
        $houseRent->ngayhethan = "2019-10-10";
        $houseRent->trangthai = false;
        $houseRent->huongnha = "Đông Nam";
        $houseRent->thoigianthue = 2;
        $houseRent->chieudai = 10;
        $houseRent->chieurong = 8;
        $houseRent->dientich = 20;
        $houseRent->dientichtongsan = 30;
        $houseRent->sotang = 2;
        $houseRent->phongngu = 3;
        $houseRent->phongtam = 3;
        $houseRent->diachi = "135 Tam Vương";
        $houseRent->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseRent->namxaydung = "2010";
        $houseRent->phaply = "Nhà có sổ hồng";
        $houseRent->garage = true;
        $houseRent->user_id = 1;
        $houseRent->district_id = 50;
        $houseRent->save();

        $houseRent = new App\Models\HouseRent();
        $houseRent->gia = 5.2;
        $houseRent->ngayhethan = "2019-10-10";
        $houseRent->trangthai = false;
        $houseRent->huongnha = " Nam";
        $houseRent->thoigianthue = 2;
        $houseRent->chieudai = 10;
        $houseRent->chieurong = 8;
        $houseRent->dientich = 20;
        $houseRent->dientichtongsan = 30;
        $houseRent->sotang = 2;
        $houseRent->phongngu = 3;
        $houseRent->phongtam = 3;
        $houseRent->diachi = "1 Hùng Vương";
        $houseRent->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseRent->namxaydung = "2010";
        $houseRent->phaply = "Nhà có sổ đỏ";
        $houseRent->garage = true;
        $houseRent->user_id = 1;
        $houseRent->district_id = 50;
        $houseRent->save();

        $houseRent = new App\Models\HouseRent();
        $houseRent->gia = 4.2;
        $houseRent->ngayhethan = "2019-10-10";
        $houseRent->trangthai = false;
        $houseRent->huongnha = "Tây";
        $houseRent->thoigianthue = 2;
        $houseRent->chieudai = 10;
        $houseRent->chieurong = 8;
        $houseRent->dientich = 20;
        $houseRent->dientichtongsan = 30;
        $houseRent->sotang = 2;
        $houseRent->phongngu = 3;
        $houseRent->phongtam = 3;
        $houseRent->diachi = "1 Hùng Bá";
        $houseRent->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseRent->namxaydung = "2010";
        $houseRent->phaply = "Nhà có sổ đỏ";
        $houseRent->garage = true;
        $houseRent->user_id = 1;
        $houseRent->district_id = 50;
        $houseRent->save();

        $houseRent = new App\Models\HouseRent();
        $houseRent->gia = 5.2;
        $houseRent->ngayhethan = "2019-10-10";
        $houseRent->trangthai = false;
        $houseRent->huongnha = "Đông Nam";
        $houseRent->thoigianthue = 2;
        $houseRent->chieudai =  25;
        $houseRent->chieurong = 10;
        $houseRent->dientich = 250;
        $houseRent->dientichtongsan = 30;
        $houseRent->sotang = 2;
        $houseRent->phongngu = 3;
        $houseRent->phongtam = 3;
        $houseRent->diachi = "1 Nguyễn Lương Bằng";
        $houseRent->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseRent->namxaydung = "2010";
        $houseRent->phaply = "Nhà có sổ đỏ";
        $houseRent->garage = true;
        $houseRent->user_id = 1;
        $houseRent->district_id = 50;
        $houseRent->save();

        $houseRent = new App\Models\HouseRent();
        $houseRent->gia = 5;
        $houseRent->ngayhethan = "2019-10-10";
        $houseRent->trangthai = false;
        $houseRent->huongnha = "Đông Nam";
        $houseRent->thoigianthue = 2;
        $houseRent->chieudai = 10;
        $houseRent->chieurong = 8;
        $houseRent->dientich = 20;
        $houseRent->dientichtongsan = 30;
        $houseRent->sotang = 2;
        $houseRent->phongngu = 3;
        $houseRent->phongtam = 3;
        $houseRent->diachi = "1 Hùng Vương";
        $houseRent->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseRent->namxaydung = "2010";
        $houseRent->phaply = "Nhà có sổ đỏ";
        $houseRent->garage = true;
        $houseRent->user_id = 1;
        $houseRent->district_id = 50;
        $houseRent->save();
    }
}
