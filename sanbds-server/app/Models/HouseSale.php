<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HouseSale extends Model
{

    protected $fillable = [
        'gia', 'ngayhethan', 'trangthai', 'huongnha', 'chieudai', 'chieurong', 'dientich', 'sotang', 'phongngu', 'phongtam', 'diachi', 'mota', 'namxaydung', 'phaply', 'garage', 'dientichtongsan', 'user_id', 'district_id','published'
    ];
}
