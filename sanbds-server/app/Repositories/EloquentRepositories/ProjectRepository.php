<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 5/11/2019
 * Time: 9:37 AM
 */

namespace App\Repositories\EloquentRepositories;


use App\Repositories\Interfaces\IProjectRepository;

class ProjectRepository extends EloquentRepository implements IProjectRepository
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Project::class;
    }
}