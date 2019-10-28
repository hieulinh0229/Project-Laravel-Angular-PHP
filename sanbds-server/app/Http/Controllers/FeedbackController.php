<?php

namespace App\Http\Controllers;

use Illuminate\Mail\Mailer;
use Illuminate\Http\Request;

use App\Models\Feedback;

class FeedbackController extends Controller
{
    public function getALL()
    {

        $list = Feedback::all();
        return response()->json($list);
    }

    public function get($id)
    {
        $result = Feedback::find($id);
        return response()->json($result);

    }

        public function update(Request $request, $id)
    {
        $data = Feedback::findOrFail($id);
        $data->update($request->all());

        return response()->json($data);
    }


         public function store(Request $request,Mailer $mailer)
    {
        $data = new Feedback();
        $data->tieude=$request->input('tieude');
        $data->noidung=$request->input('noidung');
        $data->email=$request->input('email');
        $data->trangthai=$request->input('trangthai');

        $data->save();
        $mailer->to($request->input('email'))
            ->send(new \App\Mail\feedback($request->input('noidung'),$request->input('tieude')));
        return $request;
    }
         public function delete(Request $request, $id)
    {
        $data = Feedback::findOrFail($id);
        $data->delete();
        return response()->json($data);
    }
}
