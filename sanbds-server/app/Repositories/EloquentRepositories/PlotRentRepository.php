<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 5/11/2019
 * Time: 9:37 AM
 */

namespace App\Repositories\EloquentRepositories;


use App\Repositories\Interfaces\IPlotRentRepository;

class PlotRentRepository extends EloquentRepository implements IPlotRentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\PlotRent::class;
    }
}