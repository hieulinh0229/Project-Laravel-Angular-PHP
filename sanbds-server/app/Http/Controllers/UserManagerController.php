<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserManagerController extends Controller
{
    public function getList() {
        $list = DB::table('users')
            ->select('email','name','permissions')
            ->get();
        return response()->json($list);
    }

    public function updateRoles(Request $request, $id) {

    }
}
