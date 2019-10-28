<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlotRent extends Model
{
    protected $fillable = [
        'ngayhethan', 'trangthai', 'gia', 'thoigianthue', 'chieudai', 'chieurong', 'dientich', 'phaply', 'diachi', 'mota', 'user_id', 'huong', 'district_id','published'
    ];
}
