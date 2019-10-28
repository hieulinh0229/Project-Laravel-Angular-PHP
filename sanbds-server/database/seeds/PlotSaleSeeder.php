<?php

use Illuminate\Database\Seeder;

class PlotSaleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        $plotSale = new App\Models\PlotSale();
        $plotSale->gia = 1.8;
        $plotSale->ngayhethan = "2019-10-10";
        $plotSale->trangthai = false;
        $plotSale->huong = "Đông Bắc";
        $plotSale->chieudai = 30;
        $plotSale->chieurong = 20;
        $plotSale->dientich = 600;
        $plotSale->phaply = "Nhà có sổ đỏ";
        $plotSale->diachi = "18 Nguyễn Sinh Cung";
        $plotSale->mota = "Sở hữu mặt tiền đường Nguyễn Sinh Cung trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $plotSale->user_id = 1;
        $plotSale->district_id = 50;
        $plotSale->save();

        $plotSale = new App\Models\PlotSale();
        $plotSale->gia = 2;
        $plotSale->ngayhethan = "2019-10-10";
        $plotSale->trangthai = false;
        $plotSale->huong = "Đông";
        $plotSale->chieudai = 30;
        $plotSale->chieurong = 20;
        $plotSale->dientich = 600;
        $plotSale->phaply = "Nhà có sổ đỏ";
        $plotSale->diachi = "18 Nguyễn Huệ";
        $plotSale->mota = "Sở hữu mặt tiền đường Nguyễn Huệ trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $plotSale->user_id = 1;
        $plotSale->district_id = 30;
        $plotSale->save();

        $plotSale = new App\Models\PlotSale();
        $plotSale->gia = 3;
        $plotSale->ngayhethan = "2019-10-10";
        $plotSale->trangthai = false;
        $plotSale->huong = " Bắc";
        $plotSale->chieudai = 35;
        $plotSale->chieurong = 20;
        $plotSale->dientich = 700;
        $plotSale->phaply = "Nhà có sổ đỏ";
        $plotSale->diachi = "18 Nguyễn Lương Bằng";
        $plotSale->mota = "Sở hữu mặt tiền đường Nguyễn Lương Bằng trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $plotSale->user_id = 1;
        $plotSale->district_id = 20;
        $plotSale->save();

        $plotSale = new App\Models\PlotSale();
        $plotSale->gia = 2;
        $plotSale->ngayhethan = "2019-10-10";
        $plotSale->trangthai = false;
        $plotSale->huong = "Tây Bắc";
        $plotSale->chieudai = 30;
        $plotSale->chieurong = 20;
        $plotSale->dientich = 600;
        $plotSale->phaply = "Nhà có sổ đỏ";
        $plotSale->diachi = "18 Nguyễn Sinh Cung";
        $plotSale->mota = "Sở hữu mặt tiền đường Nguyễn Sinh Cung trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $plotSale->user_id = 1;
        $plotSale->district_id = 50;
        $plotSale->save();

        $plotSale = new App\Models\PlotSale();
        $plotSale->gia = 3;
        $plotSale->ngayhethan = "2019-10-10";
        $plotSale->trangthai = false;
        $plotSale->huong = " Nam";
        $plotSale->chieudai = 20;
        $plotSale->chieurong = 20;
        $plotSale->dientich = 400;
        $plotSale->phaply = "Nhà có sổ đỏ";
        $plotSale->diachi = "18 Lê Lai";
        $plotSale->mota = "Sở hữu mặt tiền đường Lê Lai trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $plotSale->user_id = 1;
        $plotSale->district_id = 50;
        $plotSale->save();

        $plotSale = new App\Models\PlotSale();
        $plotSale->gia = 2.2;
        $plotSale->ngayhethan = "2019-10-10";
        $plotSale->trangthai = false;
        $plotSale->huong = "Đông Nam";
        $plotSale->chieudai = 30;
        $plotSale->chieurong = 20;
        $plotSale->dientich = 600;
        $plotSale->phaply = "Nhà có sổ đỏ";
        $plotSale->diachi = "1 Trần Hưng Đạo";
        $plotSale->mota = "Sở hữu mặt tiền đường Trần Hưng Đạo trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $plotSale->user_id = 1;
        $plotSale->district_id = 50;
        $plotSale->save();

        $plotSale = new App\Models\PlotSale();
        $plotSale->gia = 3;
        $plotSale->ngayhethan = "2019-10-10";
        $plotSale->trangthai = false;
        $plotSale->huong = " Bắc";
        $plotSale->chieudai = 20;
        $plotSale->chieurong = 20;
        $plotSale->dientich = 400;
        $plotSale->phaply = "Nhà có sổ hồng";
        $plotSale->diachi = "20 Nguyễn Huệ";
        $plotSale->mota = "Sở hữu mặt tiền đường Nguyễn Huệ trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $plotSale->user_id = 1;
        $plotSale->district_id = 50;
        $plotSale->save();

        $plotSale = new App\Models\PlotSale();
        $plotSale->gia = 4;
        $plotSale->ngayhethan = "2019-10-10";
        $plotSale->trangthai = false;
        $plotSale->huong = "Đông Bắc";
        $plotSale->chieudai = 30;
        $plotSale->chieurong = 20;
        $plotSale->dientich = 600;
        $plotSale->phaply = "Nhà có sổ đỏ";
        $plotSale->diachi = "18 Nguyễn Sinh ";
        $plotSale->mota = "Sở hữu mặt tiền đường Nguyễn  Sinh trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $plotSale->user_id = 1;
        $plotSale->district_id = 50;
        $plotSale->save();

        $plotSale = new App\Models\PlotSale();
        $plotSale->gia = 5;
        $plotSale->ngayhethan = "2019-10-10";
        $plotSale->trangthai = false;
        $plotSale->huong = "Đông Nam";
        $plotSale->chieudai = 30;
        $plotSale->chieurong = 20;
        $plotSale->dientich = 600;
        $plotSale->phaply = "Nhà có sổ đỏ";
        $plotSale->diachi = "1800 Nguyễn Sinh Cung";
        $plotSale->mota = "Sở hữu mặt tiền đường Nguyễn Sinh Cung trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $plotSale->user_id = 1;
        $plotSale->district_id = 50;
        $plotSale->save();

        $plotSale = new App\Models\PlotSale();
        $plotSale->gia = 4;
        $plotSale->ngayhethan = "2019-10-10";
        $plotSale->trangthai = false;
        $plotSale->huong = "Đông Bắc";
        $plotSale->chieudai = 30;
        $plotSale->chieurong = 20;
        $plotSale->dientich = 600;
        $plotSale->phaply = "Nhà có sổ đỏ";
        $plotSale->diachi = "1880 Nguyễn Sinh ";
        $plotSale->mota = "Sở hữu mặt tiền đường Nguyễn Sinh  trong quần thể khu đô thị Lakeside Palace và kết nối tuyến đường du lịch Bà Nà Hills. 
        Phía Đông giáp Khu dân cư hiện hữu, hồ sinh thái Bầu Tràm. 
        Phía Tây giáp Khu đô thị Golden Hill. 
        Phía Nam giáp Khu dân cư hiện hữu. 
        Phía Bắc giáp tuyến đường Nguyễn Lương Bằng, bãi biển Xuân Thiều.";
        $plotSale->user_id = 1;
        $plotSale->district_id = 50;
        $plotSale->save();


    }
}
