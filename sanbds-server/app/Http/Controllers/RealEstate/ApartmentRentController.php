<?php

namespace App\Http\Controllers\RealEstate;

use App\Repositories\Interfaces\IApartmentRentRepository;

class ApartmentRentController extends AbstractRealEstateController implements IRealEstateController
{
    /**
     * get repository
     * @return string
     */
    public function getRepository()
    {
        return IApartmentRentRepository::class;
    }
}
