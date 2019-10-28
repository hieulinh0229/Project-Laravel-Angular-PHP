<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 5/11/2019
 * Time: 9:36 AM
 */

namespace App\Repositories\EloquentRepositories;

use App\Repositories\Interfaces\IApartmentRentRepository;

class ApartmentRentRepository extends EloquentRepository implements IApartmentRentRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\ApartmentRent::class;
    }
}