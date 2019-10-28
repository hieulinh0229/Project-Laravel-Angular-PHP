<?php

namespace App\Http\Controllers\RealEstate;


use App\Repositories\Interfaces\IHouseRentRepository;

class HouseRentController extends AbstractRealEstateController implements IRealEstateController
{
    /**
     * get repository
     * @return string
     */
    public function getRepository()
    {
        return IHouseRentRepository::class;
    }
}