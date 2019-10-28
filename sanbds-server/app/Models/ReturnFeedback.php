<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReturnFeedback extends Model
{
    protected $fillable = [
        'tieude','noidung','email','feedback_id',
    ];}
