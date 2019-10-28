<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'tenduan', 'chudautu', 'diachi', 'mota', 'matdoxaydung', 'dientich', 'dientichmatnuoc', 'dientichcayxanh', 'quymoduan', 'nẫmydung', 'nambangia', 'district_id'
    ];
}
