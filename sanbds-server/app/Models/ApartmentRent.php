<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApartmentRent extends Model
{
    protected $fillable = [
        'gia', 'ngayhethan', 'trangthai', 'thoigianthue', 'huongnha', 'chieudai', 'chieurong', 'dientich', 'sotang', 'phongngu', 'phongtam', 'diachi', 'mota', 'namxaydung', 'phaply', 'user_id', 'tenchungcu', 'district_id'
    ];
}
