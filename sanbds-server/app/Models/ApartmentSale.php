<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApartmentSale extends Model
{
    protected $fillable = [
        'gia', 'ngayhethan', 'trangthai', 'huongnha', 'chieudai', 'chieurong', 'dientich', 'tenchungcu', 'sotang', 'phongngu', 'phongtam', 'diachi', 'mota', 'namxaydung', 'phaply', 'user_id', 'district_id'
    ];
}
