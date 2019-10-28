<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\Province;

class GetInfoController extends Controller
{
    public function getLocal() {
        $provinces = Province::all();
        $districts = District::all();
        return response()->json(['provinces' => $provinces, 'districts' => $districts]);
    }
}
