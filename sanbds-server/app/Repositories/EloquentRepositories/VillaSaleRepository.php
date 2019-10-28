<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 5/11/2019
 * Time: 9:38 AM
 */

namespace App\Repositories\EloquentRepositories;


use App\Repositories\Interfaces\IVillaSaleRepository;

class VillaSaleRepository extends EloquentRepository implements IVillaSaleRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\VillaSale::class;
    }
}