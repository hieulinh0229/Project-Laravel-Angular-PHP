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

class GetListController extends Controller
{
    public function houseSale(Request $rq) {
        if($rq->has('trangthai')) {
            $status = $rq->trangthai;
            $list = HouseSale::where('trangthai',$status)->get();
        } else {
            $list = HouseSale::all();
        };
        return response()->json($list);
    }

    public function houseRent(Request $rq) {
        if($rq->has('trangthai')) {
            $status = $rq->trangthai;
            $list = HouseRent::where('trangthai',$status)->get();
        } else {
            $list = HouseRent::all();
        };
        return response()->json($list);
    }

    public function plotSale(Request $rq) {
        if($rq->has('trangthai')) {
            $status = $rq->trangthai;
            $list = PlotSale::where('trangthai',$status)->get();
        } else {
            $list = PlotSale::all();
        };
        return response()->json($list);
    }

    public function plotRent(Request $rq) {
        if($rq->has('trangthai')) {
            $status = $rq->trangthai;
            $list = PlotRent::where('trangthai',$status)->get();
        } else {
            $list = PlotRent::all();
        };
        return response()->json($list);
    }

    public function villaSale(Request $rq) {
        if($rq->has('trangthai')) {
            $status = $rq->trangthai;
            $list = VillaSale::where('trangthai',$status)->get();
        } else {
            $list = VillaSale::all();
        };
        return response()->json($list);
    }

    public function villaRent(Request $rq) {
        if($rq->has('trangthai')) {
            $status = $rq->trangthai;
            $list = VillaRent::where('trangthai',$status)->get();
        } else {
            $list = VillaRent::all();
        };
        return response()->json($list);
    }

    public function apartmentSale(Request $rq) {
        if($rq->has('trangthai')) {
            $status = $rq->trangthai;
            $list = ApartmentSale::where('trangthai',$status)->get();
        } else {
            $list = ApartmentSale::all();
        };
        return response()->json($list);
    }

    public function apartmentRent(Request $rq) {
        if($rq->has('trangthai')) {
            $status = $rq->trangthai;
            $list = ApartmentRent::where('trangthai',$status)->get();
        } else {
            $list = ApartmentRent::all();
        };
        return response()->json($list);
    }
}
