<?php
/**
 * Created by PhpStorm.
 * User: Danh Nguyen
 * Date: 5/9/2019
 * Time: 10:00 AM
 */

namespace App\Repositories\EloquentRepositories;


use App\Models\Images;
use App\Repositories\Interfaces\IImageRepository;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ImageRepository implements IImageRepository
{
    public function getImageUrls($id, $category) {
        //This function return Array of Object
        $imageUrls = DB::table('images')
            ->select('url')
            ->where('category',$category)
            ->where('cate_id',$id)
            ->get();

        //Convert to array of url
        $result = [];
        foreach($imageUrls as $url) {
            $result[] = $url->url;
        }

        return $result;
    }

    public function storeImage($file) {
        $path = $file->store('images/realestate','public');
        return $path;
    }

    public function storeImageUrls($urlList, $cate_id, $category) {
        foreach($urlList as $url) {
            $img = new \App\Models\Images();
            $img->url = $url;
            $img->cate_id = $cate_id;
            $img->category = $category;
            $img->save();
        }

        return true;
    }

    public function delete($url)
    {
        $image = Images::where('url', $url)->firstOrFail();        
        if ($image) {
            $image->delete();
            return Storage::delete($url);
        };
        return false;
    }

}