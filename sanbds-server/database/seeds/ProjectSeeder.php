<?php

use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $project = new App\Models\Project();
        $project->tenduan = "Khu biệt thự liền kề MONNOCO";
        $project->chudautu = "Quang Mập";
        $project->donvithicong = "Gragas";
        $project->diachi = "2550 Lê Lợi";
        $project->matdoxaydung = "90%";
        $project->dientich = 1000;
        $project->dientichmatnuoc = 10000;
        $project->dientichcayxanh = 500;
        $project->quymoduan = "500 Biệt thự";
        $project->namxaydung = "2001";
        $project->nambangiao = "2020";
        $project->district_id = 50;
        $project->save();

        $project = new App\Models\Project();
        $project->tenduan = "Khu biệt thự liền kề VINAGAME";
        $project->chudautu = "Tâm Báo";
        $project->donvithicong = "Gragas";
        $project->diachi = "20 Xuân Thiều";
        $project->matdoxaydung = "90%";
        $project->dientich = 1000;
        $project->dientichmatnuoc = 10000;
        $project->dientichcayxanh = 500;
        $project->quymoduan = "500 Biệt thự";
        $project->namxaydung = "2019";
        $project->nambangiao = "2020";
        $project->district_id = 20;
        $project->save();

        $project = new App\Models\Project();
        $project->tenduan = "Khu biệt thự liền kề VINGROUP";
        $project->chudautu = "Danh Nguyễn";
        $project->donvithicong = "Gragas";
        $project->diachi = "30 Hùng Vương";
        $project->matdoxaydung = "90%";
        $project->dientich = 1000;
        $project->dientichmatnuoc = 10000;
        $project->dientichcayxanh = 500;
        $project->quymoduan = "500 Biệt thự";
        $project->namxaydung = "2019";
        $project->nambangiao = "2020";
        $project->district_id = 50;
        $project->save();
        $project = new App\Models\Project();
        $project->tenduan = "Khu biệt thự liền kề TÂM BÙI";
        $project->chudautu = "Quang";
        $project->donvithicong = "Gragas";
        $project->diachi = "200 Nguyễn Lương Bằng";
        $project->matdoxaydung = "90%";
        $project->dientich = 1000;
        $project->dientichmatnuoc = 10000;
        $project->dientichcayxanh = 500;
        $project->quymoduan = "500 Biệt thự";
        $project->namxaydung = "2019";
        $project->nambangiao = "2020";
        $project->district_id = 50;
        $project->save();
    }
}
