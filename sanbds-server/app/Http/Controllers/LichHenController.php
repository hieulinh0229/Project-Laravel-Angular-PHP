<?php

namespace App\Http\Controllers;

 use App\Models\LichHenModel;
use Illuminate\Http\Request;

class LichHenController extends Controller
{
    public function lichHen(\Illuminate\Http\Request $request, \Illuminate\Mail\Mailer $mailer)
    {
       $lichHen = new LichHenModel();
       $lichHen->name=$request->input('name');
        $lichHen->email=$request->input('email');
        $lichHen->phone=$request->input('phone');
        $lichHen->thongtinthem=$request->input('thongtinthem');
        $lichHen->ngayhen=$request->input('ngayhen');
        $lichHen->save();

        $mailer->to($request->input('email'))
            ->send(new \App\Mail\MyMail($request->input('thongtinthem')));

        return $request;
    }
}
