<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 5/11/2019
 * Time: 10:24 AM
 */

namespace App\Repositories\Interfaces;

interface IImageRepository
{
    /** Store image into storage
     *  @param File $image
     *  @return string
     */
    public function storeImage($image);

    /** Get all image-url of Real Estate
     * @param integer $cate_id
     * @param string %table
     * @return array
     */
    public function getImageUrls($cate_id, $category);

    /** Store Real State image-urls into database
     * @param array $imageUrls
     * @param integer $cate_id
     * @param string $category
     * @return boolean
     */
    public function storeImageUrls($imageUrls, $cate_id, $category);

    /** Delete image from storage
     * @param string $url
     * @return boolean
     */
    public function delete($url);
}