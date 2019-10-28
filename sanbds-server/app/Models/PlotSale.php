<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlotSale extends Model
{
    protected $fillable = [
        'ngayhethan', 'trangthai', 'gia', 'chieudai', 'chieurong', 'dientich', 'phaply', 'diachi', 'mota', 'user_id', 'huong', 'district_id','published'
    ];
}
