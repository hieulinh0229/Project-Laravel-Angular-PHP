<?php

namespace App\Http\Controllers;

use App\ApartmentRent;
use App\ApartmentSale;
use App\HouseRent;
use App\HouseSale;
use App\PlotRent;
use App\PlotSale;
use App\VillaRent;
use App\VillaSale;
use Illuminate\Http\Request;

class UpdateStatus extends Controller
{
    public function houseSale(Request $rq) {
        $data = $rq->all();
        $id = $data['id'];
        $trangthai = $data['trangthai'];
        $item = HouseSale::findOrFail($id);
        $item->trangthai = $trangthai;
        $item->save();
        return response()->json($item);
    }

    public function houseRent(Request $rq) {
        $data = $rq->all();
        $id = $data['id'];
        $trangthai = $data['trangthai'];
        $item = HouseRent::findOrFail($id);
        $item->trangthai = $trangthai;
        $item->save();
        return response()->json($item);
    }

    public function plotSale(Request $rq) {
        $data = $rq->all();
        $id = $data['id'];
        $trangthai = $data['trangthai'];
        $item = PlotSale::findOrFail($id);
        $item->trangthai = $trangthai;
        $item->save();
        return response()->json($item);
    }

    public function plotRent(Request $rq) {
        $data = $rq->all();
        $id = $data['id'];
        $trangthai = $data['trangthai'];
        $item = PlotRent::findOrFail($id);
        $item->trangthai = $trangthai;
        $item->save();
        return response()->json($item);
    }

    public function villaSale(Request $rq) {
        $data = $rq->all();
        $id = $data['id'];
        $trangthai = $data['trangthai'];
        $item = VillaSale::findOrFail($id);
        $item->trangthai = $trangthai;
        $item->save();
        return response()->json($item);
    }

    public function villaRent(Request $rq) {
        $data = $rq->all();
        $id = $data['id'];
        $trangthai = $data['trangthai'];
        $item = VillaRent::findOrFail($id);
        $item->trangthai = $trangthai;
        $item->save();
        return response()->json($item);
    }

    public function apartmentSale(Request $rq) {
        $data = $rq->all();
        $id = $data['id'];
        $trangthai = $data['trangthai'];
        $item = ApartmentSale::findOrFail($id);
        $item->trangthai = $trangthai;
        $item->save();
        return response()->json($item);
    }

    public function apartmentRent(Request $rq) {
        $data = $rq->all();
        $id = $data['id'];
        $trangthai = $data['trangthai'];
        $item = ApartmentRent::findOrFail($id);
        $item->trangthai = $trangthai;
        $item->save();
        return response()->json($item);
    }
}
