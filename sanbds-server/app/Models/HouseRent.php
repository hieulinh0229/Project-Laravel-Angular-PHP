<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HouseRent extends Model
{
    protected $fillable = [
        'gia', 'ngayhethan', 'trangthai', 'thoigianthue', 'huongnha', 'chieudai', 'chieurong', 'dientich', 'dientichtongsan', 'sotang', 'phongngu', 'phongtam', 'diachi', 'mota', 'namxaydung', 'phaply', 'garage', 'user_id', 'district_id','published'
    ];
}
