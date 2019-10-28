<?php

namespace App\Http\Controllers\RealEstate;

use App\Repositories\Interfaces\IHouseSaleRepository;

class HouseSaleController extends AbstractRealEstateController implements IRealEstateController
{
    /**
     * get repository
     * @return string
     */
    public function getRepository()
    {
        return IHouseSaleRepository::class;
    }
}
