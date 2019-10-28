<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 5/11/2019
 * Time: 9:39 AM
 */

namespace App\Repositories\EloquentRepositories;


use App\Repositories\Interfaces\IHouseSaleRepository;

class HouseSaleRepository extends EloquentRepository implements IHouseSaleRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\HouseSale::class;
    }
}