<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 5/11/2019
 * Time: 9:36 AM
 */

namespace App\Repositories\EloquentRepositories;

use App\Repositories\Interfaces\IApartmentSaleRepository;

class ApartmentSaleRepository extends EloquentRepository implements IApartmentSaleRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\ApartmentSale::class;
    }
}