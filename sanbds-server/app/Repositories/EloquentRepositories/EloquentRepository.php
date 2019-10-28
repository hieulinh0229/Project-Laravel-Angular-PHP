<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 5/11/2019
 * Time: 10:01 AM
 */

namespace App\Repositories\EloquentRepositories;


use App\Models\District;
use App\Models\Province;
use App\User;

abstract class EloquentRepository
{
    /**
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $_model;
    protected $imgRepo;

    /**
     * EloquentRepository constructor.
     */
    public function __construct(ImageRepository $imgRepo)
    {
        $this->setModel();
        $this->imgRepo = $imgRepo;
    }

    /**
     * get model
     * @return string
     */
    abstract public function getModel();

    /**
     * Set model
     */
    public function setModel()
    {
        $this->_model = app()->make(
            $this->getModel()
        );
    }

    /**
     * Get All
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll()
    {
//        $result = $this->_model->where('trangthai','=', 0)->get();
        $result = $this->_model->all();
        $this->mergeImages($result);
        $this->mergeDistrictName($result);
        $this->mergeProvinceName($result);
        return $result;
    }

    /**
     * Get one
     * @param $id
     * @return mixed
     */
    public function find($id)
    {
        $result = $this->_model->find($id);
        if($result) {
            $result->images = $this->getImgUrls($id);
            $district = $this->getDistrict($result->district_id);
            $province = $this->getProvinceByDistrictId($result->district_id);
            $result->district = $district->name;
            $result->province_id = $district->province_id;
            $result->province = $province->name;
            $user = User::find($result->user_id);
//            $result->user();
            $result->user_email = $user ? $user->email : null;
            $result->user_name = $user ? $user->name : null;
        }

        return $result;
    }

    /**Get Array of compatible results
     * @param $price
     * @return mixed
     */
    public function getCompatible($price, $id)
    {
        $boundary = 0.2;
        $result = $this->_model->where('gia','>=',$price-$boundary)
                    ->where('gia','<=',$price+$boundary)
                    ->where('id','!=', $id)
                    ->take(3)
                    ->get();
        $this->mergeImages($result);
        $this->mergeDistrictName($result);
        $this->mergeProvinceName($result);
        return $result;
    }


    /**
     * Create
     * @param array $attributes
     * @return mixed
     */
    public function create(array $attributes)
    {
        $imageUrls = $attributes['images'];
        $realEstate = $this->_model->create($attributes);
        $id = $realEstate->id;
        $category = $this->getTable();
        if ($imageUrls != null) {
            $this->imgRepo->storeImageUrls($imageUrls, $id, $category);
        }
        $realEstate->images = $imageUrls;
        return response()->json($realEstate);
    }

    /**
     * Update
     * @param $id
     * @param array $attributes
     * @return bool|mixed
     */
    public function update($id, array $attributes)
    {
        $result = $this->_model->findOrFail($id);
        $result->update($attributes);
        if ($result) {
            $category = $this->getTable();
            if (array_key_exists('new_images', $attributes)) {
                $imageUrls = $attributes['new_images'];
                if ($imageUrls != null) {
                    $this->imgRepo->storeImageUrls($imageUrls, $id, $category);
                }
            }

            if (array_key_exists('delete_images', $attributes)) {
                $deletedImages = $attributes['delete_images'];

                if ($deletedImages != null) {
                    foreach ($deletedImages as $img) {
                        $this->imgRepo->delete($img);
                    };
                }
            }
            return $result;
        }
        return false;
    }

    /**
     * Delete
     *
     * @param $id
     * @return bool
     */
    public function delete($id)
    {
        $result = $this->find($id);
        if ($result) {
            $result->delete();

            return true;
        }

        return false;
    }


    public function getImgUrls($id) {
        $category = $this->getTable();
        $result = $this->imgRepo->getImageUrls($id,$category);
        return $result;
    }

    public function mergeImages($array) {
        foreach ($array as $item) {
            $item->images = $this->getImgUrls($item->id);
        }
    }

    public function getTable() {
        return $this->_model->getTable();
    }
    public function getDistrictName($id) {
        $district = District::findOrFail($id);
        return $district->name;
    }

    public function getDistrict($id) {
        return District::findOrFail($id);
    }

    public function getProvinceByDistrictId($id) {
        $district = District::findOrFail($id);
        $province = Province::findOrFail($district->province_id);
        return $province;
    }
    public function mergeDistrictName($list) {
        if ($list) {
            foreach ($list as $item) {
                $item->district = $this->getDistrictName($item->district_id);
            }
        }
    }

    public function mergeProvinceName($list) {
        if ($list) {
            foreach ($list as $item) {
                $province = $this->getProvinceByDistrictId($item->district_id);
                $item->province = $province->name;
            }
        }
    }

}