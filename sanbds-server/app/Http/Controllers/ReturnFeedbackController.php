<?php

namespace App\Http\Controllers;

use App\Models\ReturnFeedback;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailer;


class ReturnFeedbackController extends Controller
{
    public function getALL()
    {

        $list = ReturnFeedback::all();
        return response()->json($list);
    }

    public function get($id)
    {
        $result = ReturnFeedback::find($id);
        return response()->json($result);

    }

    public function update(Request $request, $id)
    {
        $data = ReturnFeedback::findOrFail($id);
        $data->update($request->all());

        return response()->json($data);
    }


    public function store(Request $request,Mailer $mailer)
    {
        $data = new ReturnFeedback();
        $data->tieude=$request->input('tieude');
        $data->noidung=$request->input('noidung');
        $data->email=$request->input('email');
        $data->save();
        $mailer->to($request->input('email'))
            ->send(new \App\Mail\Retunrfeedback($request->input('noidung'),$request->input('tieude')));
        return $request;
    }
    public function delete(Request $request, $id)
    {
        $data = ReturnFeedback::findOrFail($id);
        $data->delete();
        return response()->json($data);
    }
}
