<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VillaRent extends Model
{
    protected $fillable = [
        'gia', 'ngayhethan', 'trangthai', 'huongnha', 'thoigianthue', 'chieudai', 'chieurong', 'dientich', 'dientichtongsan', 'sotang', 'phongngu', 'phongtam', 'phaply', 'diachi', 'mota', 'namxaydung', 'garage', 'sanvuon', 'beboi', 'project_id', 'user_id','district_id','published'
    ];
}
