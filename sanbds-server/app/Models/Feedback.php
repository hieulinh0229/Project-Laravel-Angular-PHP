<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    protected $fillable = [
        'tieude','noidung','email','user_id','district_id','trangthai'
    ];
}
