<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VillaSale extends Model
{
    protected $fillable = [
        'gia', 'ngayhethan', 'trangthai', 'huongnha', 'chieudai', 'chieurong', 'dientich', 'dientichtongsan', 'sotang', 'phongngu', 'phongtam', 'phaply', 'diachi', 'mota', 'namxaydung', 'garage', 'sanvuon', 'beboi', 'project_id', 'user_id','district_id','published'
    ];
}
