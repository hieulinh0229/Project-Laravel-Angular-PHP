<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 4/28/2019
 * Time: 10:59 AM
 */

namespace App\Services;


use App\HouseForSale;

class HouseSaleService
{
    public function getList() {
        $housesForSaleList = HouseForSale::all();
        foreach ($housesForSaleList as $item) {
            $item = $this->setFullAttr($item);
        };
        return $housesForSaleList;
    }

    public function getElement($id) {
        $houseForSale = HouseForSale::find($id);
        $houseForSale = $this->setFullAttr($houseForSale);
        return $houseForSale;
    }

    public function  setFullAttr(HouseForSale $houseForSale) {
        $houseForSale->house;
        $houseForSale->house->images;
        $houseForSale->house->province;
        return  $houseForSale;
    }
}