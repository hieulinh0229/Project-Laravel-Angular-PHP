<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 5/11/2019
 * Time: 11:02 AM
 */

namespace App\Http\Controllers\RealEstate;


use Illuminate\Http\Request;

interface IRealEstateController
{
    /**Get all Real Estates of this Article
     * @return mixed
     */
    public function getAll();

    /**Get one real Estates
     * @param $id
     * @return mixed
     */
    public function get($id);

    /** Create new Real Estate
     * @param Request $request
     * @return mixed
     */
    public function create(Request $request);

}