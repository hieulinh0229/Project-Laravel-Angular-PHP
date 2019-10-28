<?php

namespace App\Http\Controllers\RealEstate;

use App\Repositories\Interfaces\IProjectRepository;

class ProjectController extends AbstractRealEstateController implements IRealEstateController
{
    /**
     * get repository
     * @return string
     */
    public function getRepository()
    {
        return IProjectRepository::class;
    }
}
