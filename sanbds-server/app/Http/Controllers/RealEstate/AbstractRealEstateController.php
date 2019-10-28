<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 5/11/2019
 * Time: 11:39 AM
 */

namespace App\Http\Controllers\RealEstate;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

abstract class AbstractRealEstateController extends Controller
{
    /**
     *
     */
    protected $_repository;
    /**
     * RealEstateController constructor.
     */
    public function __construct()
    {
        $this->setRepository();
    }

    /**
     * get repository
     * @return string
     */
    abstract public function getRepository();

    /**
     * Set repository
     */
    public function setRepository()
    {
        $this->_repository = app()->make(
            $this->getRepository()
        );
    }

    /**
     * Get All
     */
    public function getAll()
    {
        $result = $this->_repository->getAll();

        return response()->json($result);
    }

    /**
     * Get one
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        $result = $this->_repository->find($id);        
        $result->compatibles = $this->_repository->getCompatible($result->gia, $id);
        return $result;
    }

    /**Create real estate
     * @param Request $request
     * @return mixed
     */

    public function create(Request $request) {
        $attributes = $request->all();
        $result = $this->_repository->create($attributes);
        return response()->json('true');
    }

    public function update($id, Request $request) {
        $attributes = $request->all();
        $this->_repository->update($id, $attributes);
        $result = $this->get($id);
        return $result;
    }

}