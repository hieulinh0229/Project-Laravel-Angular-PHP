<?php

use Illuminate\Database\Seeder;

class HouseSaleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $houseSale = new App\Models\HouseSale();
        $houseSale->gia = 5.2;
        $houseSale->ngayhethan = "2019-10-10";
        $houseSale->trangthai = false;
        $houseSale->huongnha = "Đông Nam";
        $houseSale->chieudai = 40;
        $houseSale->chieurong = 20;
        $houseSale->dientich = 800;
        $houseSale->dientichtongsan = 400;
        $houseSale->sotang = 3;
        $houseSale->phongngu = 9;
        $houseSale->phongtam = 8;
        $houseSale->diachi = "1 Hùng Vương";
        $houseSale->mota = "Sở hữu mặt tiền đường Phan Đình Phùng trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseSale->namxaydung = "2010";
        $houseSale->phaply = "Nhà có sổ đỏ";
        $houseSale->garage = true;
        $houseSale->user_id = 10;
        $houseSale->district_id = 50;
        $houseSale->save();

        $houseSale = new App\Models\HouseSale();
        $houseSale->gia = 1;
        $houseSale->ngayhethan = "2019-10-10";
        $houseSale->trangthai = false;
        $houseSale->huongnha = "Tây Nam";
        $houseSale->chieudai = 10;
        $houseSale->chieurong = 20;
        $houseSale->dientich = 200;
        $houseSale->dientichtongsan = 400;
        $houseSale->sotang = 3;
        $houseSale->phongngu = 9;
        $houseSale->phongtam = 8;
        $houseSale->diachi = "1 Phan Đình Phùng";
        $houseSale->mota = "Sở hữu mặt tiền đường Phan Đình Phùng trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseSale->namxaydung = "2010";
        $houseSale->phaply = "Nhà có sổ đỏ";
        $houseSale->garage = true;
        $houseSale->user_id = 10;
        $houseSale->district_id = 50;
        $houseSale->save();

        $houseSale = new App\Models\HouseSale();
        $houseSale->gia = 5.2;
        $houseSale->ngayhethan = "2019-10-10";
        $houseSale->trangthai = false;
        $houseSale->huongnha = "Đông Nam";
        $houseSale->chieudai = 40;
        $houseSale->chieurong = 20;
        $houseSale->dientich = 800;
        $houseSale->dientichtongsan = 400;
        $houseSale->sotang = 3;
        $houseSale->phongngu = 9;
        $houseSale->phongtam = 8;
        $houseSale->diachi = "1000 Xuân Thiều ";
        $houseSale->mota = "Sở hữu mặt tiền đường Phan Đình Phùng trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseSale->namxaydung = "2010";
        $houseSale->phaply = "Nhà có sổ đỏ";
        $houseSale->garage = true;
        $houseSale->user_id = 10;
        $houseSale->district_id = 50;
        $houseSale->save();

        $houseSale = new App\Models\HouseSale();
        $houseSale->gia = 4;
        $houseSale->ngayhethan = "2019-10-10";
        $houseSale->trangthai = false;
        $houseSale->huongnha = "Tây Nam";
        $houseSale->chieudai = 25;
        $houseSale->chieurong = 20;
        $houseSale->dientich = 500;
        $houseSale->dientichtongsan = 400;
        $houseSale->sotang = 3;
        $houseSale->phongngu = 5;
        $houseSale->phongtam = 6;
        $houseSale->diachi = "188881 Nguyễn Lương Bằng";
        $houseSale->mota = "Sở hữu mặt tiền đường Phan Đình Phùng trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseSale->namxaydung = "2010";
        $houseSale->phaply = "Nhà có sổ đỏ";
        $houseSale->garage = true;
        $houseSale->user_id = 10;
        $houseSale->district_id = 50;
        $houseSale->save();

        $houseSale = new App\Models\HouseSale();
        $houseSale->gia = 4.5;
        $houseSale->ngayhethan = "2019-10-10";
        $houseSale->trangthai = false;
        $houseSale->huongnha = "Đông Nam";
        $houseSale->chieudai = 40;
        $houseSale->chieurong = 20;
        $houseSale->dientich = 800;
        $houseSale->dientichtongsan = 400;
        $houseSale->sotang = 3;
        $houseSale->phongngu = 9;
        $houseSale->phongtam = 8;
        $houseSale->diachi = "122 Xuân Thiều";
        $houseSale->mota = "Sở hữu mặt tiền đường Phan Đình Phùng trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseSale->namxaydung = "2010";
        $houseSale->phaply = "Nhà có sổ đỏ";
        $houseSale->garage = true;
        $houseSale->user_id = 10;
        $houseSale->district_id = 40;
        $houseSale->save();

        $houseSale = new App\Models\HouseSale();
        $houseSale->gia = 8;
        $houseSale->ngayhethan = "2019-10-10";
        $houseSale->trangthai = false;
        $houseSale->huongnha = " Nam";
        $houseSale->chieudai = 40;
        $houseSale->chieurong = 20;
        $houseSale->dientich = 800;
        $houseSale->dientichtongsan = 400;
        $houseSale->sotang = 3;
        $houseSale->phongngu = 9;
        $houseSale->phongtam = 8;
        $houseSale->diachi = "1 Hùng Vương";
        $houseSale->mota = "Sở hữu mặt tiền đường Phan Đình Phùng trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseSale->namxaydung = "2010";
        $houseSale->phaply = "Nhà có sổ đỏ";
        $houseSale->garage = true;
        $houseSale->user_id = 10;
        $houseSale->district_id = 50;
        $houseSale->save();

        $houseSale = new App\Models\HouseSale();
        $houseSale->gia = 5.2;
        $houseSale->ngayhethan = "2019-10-10";
        $houseSale->trangthai = false;
        $houseSale->huongnha = " Nam";
        $houseSale->chieudai = 40;
        $houseSale->chieurong = 20;
        $houseSale->dientich = 800;
        $houseSale->dientichtongsan = 400;
        $houseSale->sotang = 3;
        $houseSale->phongngu = 9;
        $houseSale->phongtam = 8;
        $houseSale->diachi = "13 Phan Đình Phùng";
        $houseSale->mota = "Sở hữu mặt tiền đường Phan Đình Phùng trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseSale->namxaydung = "2010";
        $houseSale->phaply = "Nhà có sổ đỏ";
        $houseSale->garage = true;
        $houseSale->user_id = 10;
        $houseSale->district_id = 50;
        $houseSale->save();

        $houseSale = new App\Models\HouseSale();
        $houseSale->gia = 6;
        $houseSale->ngayhethan = "2019-10-10";
        $houseSale->trangthai = false;
        $houseSale->huongnha = "Bắc";
        $houseSale->chieudai = 40;
        $houseSale->chieurong = 20;
        $houseSale->dientich = 800;
        $houseSale->dientichtongsan = 400;
        $houseSale->sotang = 3;
        $houseSale->phongngu = 9;
        $houseSale->phongtam = 8;
        $houseSale->diachi = "156 Bầu Tràm";
        $houseSale->mota = "Sở hữu mặt tiền đường Phan Đình Phùng trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseSale->namxaydung = "2010";
        $houseSale->phaply = "Nhà có sổ đỏ";
        $houseSale->garage = true;
        $houseSale->user_id = 10;
        $houseSale->district_id = 50;
        $houseSale->save();

        $houseSale = new App\Models\HouseSale();
        $houseSale->gia = 5.2;
        $houseSale->ngayhethan = "2019-10-10";
        $houseSale->trangthai = false;
        $houseSale->huongnha = "Nam";
        $houseSale->chieudai = 30;
        $houseSale->chieurong = 20;
        $houseSale->dientich = 600;
        $houseSale->dientichtongsan = 400;
        $houseSale->sotang = 3;
        $houseSale->phongngu = 9;
        $houseSale->phongtam = 8;
        $houseSale->diachi = "1 Hùng Bá";
        $houseSale->mota = "Sở hữu mặt tiền đường Phan Đình Phùng trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseSale->namxaydung = "2010";
        $houseSale->phaply = "Nhà có sổ đỏ";
        $houseSale->garage = true;
        $houseSale->user_id = 10;
        $houseSale->district_id = 50;
        $houseSale->save();

        $houseSale = new App\Models\HouseSale();
        $houseSale->gia = 4.8;
        $houseSale->ngayhethan = "2019-10-10";
        $houseSale->trangthai = false;
        $houseSale->huongnha = "Tây Nam";
        $houseSale->chieudai = 40;
        $houseSale->chieurong = 20;
        $houseSale->dientich = 800;
        $houseSale->dientichtongsan = 400;
        $houseSale->sotang = 3;
        $houseSale->phongngu = 9;
        $houseSale->phongtam = 8;
        $houseSale->diachi = "1 Tam Vương";
        $houseSale->mota = "Sở hữu mặt tiền đường Tam Vương trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $houseSale->namxaydung = "2016";
        $houseSale->phaply = "Nhà có sổ đỏ";
        $houseSale->garage = true;
        $houseSale->user_id = 7;
        $houseSale->district_id = 50;
        $houseSale->save();


    }
}
