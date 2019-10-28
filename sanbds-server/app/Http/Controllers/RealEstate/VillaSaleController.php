<?php

namespace App\Http\Controllers\RealEstate;

use App\Repositories\Interfaces\IVillaSaleRepository;

class VillaSaleController  extends AbstractRealEstateController implements IRealEstateController
{
    /**
     * get repository
     * @return string
     */
    public function getRepository()
    {
        return IVillaSaleRepository::class;
    }
}