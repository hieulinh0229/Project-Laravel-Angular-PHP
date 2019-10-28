<?php

namespace App\Http\Controllers\RealEstate;

use App\Repositories\Interfaces\IPlotRentRepository;

class PlotRentController extends AbstractRealEstateController implements IRealEstateController
{
    /**
     * get repository
     * @return string
     */
    public function getRepository()
    {
        return IPlotRentRepository::class;
    }
}