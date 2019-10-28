<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 5/11/2019
 * Time: 9:37 AM
 */

namespace App\Repositories\EloquentRepositories;


use App\Repositories\Interfaces\IPlotSaleRepository;

class PlotSaleRepository extends EloquentRepository implements IPlotSaleRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\PlotSale::class;
    }
}