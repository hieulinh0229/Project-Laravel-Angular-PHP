<?php

namespace App;
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class LichHenModel extends Model
{
    protected $fillable = [
        'name', 'email', 'phone', 'thongtinthem', 'ngayhen'
    ];
}
