<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 5/11/2019
 * Time: 9:35 AM
 */

namespace App\Repositories\EloquentRepositories;

use App\Repositories\Interfaces\IHouseRentRepository;

class HouseRentRepository extends EloquentRepository implements IHouseRentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\HouseRent::class;
    }
}