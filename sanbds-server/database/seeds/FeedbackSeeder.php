<?php

use Illuminate\Database\Seeder;

class FeedbackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $feedback = new App\Models\Feedback();
        $feedback->tieude = "Mời nhóm Gragas đi nhậu";
        $feedback->noidung = "Về Hương đồng nhậu";
        $feedback->trangthai = false;
        $feedback->email = 'mchinhlya@gmail.com';
        $feedback->user_id = 2;
        $feedback->save();
    }
}
