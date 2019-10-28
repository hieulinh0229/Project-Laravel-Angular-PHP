<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\DB;

class UserProfileController extends Controller
{
    public function getUserProfile()
    {
        $user = $admin = User::where('permissions','NOT LIKE',"%\"Admin\":true%")->get();
        return $user;
    }
    public function getUserProfileById($id)
    {
        $user = User::findOrFail($id);
        return $user;
      
    }
    public function updateRoles(Request $request, $id) {
        $user = $this->getUserProfileById($id);
        $roles = $request->all();
        if ($user) {
            $userRoles = (object)json_decode($user->permissions);
            foreach($roles as $key => $value) {
                $userRoles->$key = $value;
            }
            $user->permissions = json_encode($userRoles);
            $user->save();
        }
        return $user;
    }
    public function getAdmin()
    {
        $admin = User::where('permissions','LIKE',"%\"Admin\":true%")->get();
        return $admin;
    }

    public function getAdminById($id)
    {
        $admin = User::findOrFail($id);
        return $admin;
    }
}
