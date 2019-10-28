<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 5/11/2019
 * Time: 9:51 AM
 */

namespace App\Repositories\Interfaces;


interface RealEstateRepositoryInterface
{
    /**
     * Get all
     * @return mixed
     */
    public function getAll();

    /**
     * Get one
     * @param $id
     * @return mixed
     */
    public function find($id);

    /**Get Array of compatible results
     * @param $price
     * @return mixed
     */
    public function getCompatible($price, $id);

    /**
     * Create
     * @param array $attributes
     * @return mixed
     */
    public function create(array $attributes);

    /**
     * Update
     * @param $id
     * @param array $attributes
     * @return mixed
     */
    public function update($id, array $attributes);

    /**
     * Delete
     * @param $id
     * @return mixed
     */
    public function delete($id);
}