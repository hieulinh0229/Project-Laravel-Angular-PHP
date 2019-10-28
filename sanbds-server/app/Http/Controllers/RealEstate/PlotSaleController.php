<?php

namespace App\Http\Controllers\RealEstate;

use App\Repositories\Interfaces\IPlotSaleRepository;

class PlotSaleController extends AbstractRealEstateController implements IRealEstateController
{
    /**
     * get repository
     * @return string
     */
    public function getRepository()
    {
        return IPlotSaleRepository::class;
    }
}
