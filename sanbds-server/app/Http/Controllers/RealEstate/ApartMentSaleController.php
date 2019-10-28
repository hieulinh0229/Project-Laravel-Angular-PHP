<?php

namespace App\Http\Controllers\RealEstate;


use App\Repositories\Interfaces\IApartmentSaleRepository;

class ApartMentSaleController extends AbstractRealEstateController implements IRealEstateController
{
    /**
     * get repository
     * @return string
     */
    public function getRepository()
    {
        return IApartmentSaleRepository::class;
    }
}