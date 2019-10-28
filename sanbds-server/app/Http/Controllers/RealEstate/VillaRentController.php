<?php

namespace App\Http\Controllers\RealEstate;

use App\Repositories\Interfaces\IVillaRentRepository;

class VillaRentController extends AbstractRealEstateController implements IRealEstateController
{
    /**
     * get repository
     * @return string
     */
    public function getRepository()
    {
        return IVillaRentRepository::class;
    }
}