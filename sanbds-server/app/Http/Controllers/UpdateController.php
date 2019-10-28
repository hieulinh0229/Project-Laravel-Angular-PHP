<?php

namespace App\Http\Controllers;

use App\ApartmentRent;
use App\ApartmentSale;
use App\HouseRent;
use App\HouseSale;
use App\Images;
use App\PlotRent;
use App\PlotSale;
use App\VillaRent;
use App\VillaSale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class UpdateController extends Controller
{


    public function updatePlotRent(Request $request)
    {
        $data = $request->all();
        $id = $data['id'];
        $images = $data['images'];
        $deleteImages = $data['delete'];

        //Cập nhật dữ liệu cho bảng
        $plotRent = PlotRent::findOrFail($id);
        $plotRent->fill($data);
        $plotRent->save();


        //Thêm ảnh vào server và lưu đường dẫn
        $category = 'plot_rents';
        $cate_id = $plotRent->id;
        $imageUrls = $this->storeImages($images, $category, $cate_id);

        //Xóa các hình cũ được chọn
        $this->deleteImages($deleteImages);

        return response()->json([$plotRent, $imageUrls]);
    }

    public function updatePlotSale(Request $request)
    {
        $data = $request->all();
        $id = $data['id'];
        $images = $data['images'];
        $deleteImages = $data['delete'];

        //Cập nhật dữ liệu cho bảng
        $plotSale = PlotSale::findOrFail($id);
        $plotSale->fill($data);
        $plotSale->save();


        //Thêm ảnh vào server và lưu đường dẫn
        $category = 'plot_sales';
        $cate_id = $plotSale->id;
        $imageUrls = $this->storeImages($images, $category, $cate_id);

        //Xóa các hình cũ được chọn
        $this->deleteImages($deleteImages);

        return response()->json([$plotSale, $imageUrls]);
    }

    public function updateApartmentRent(Request $request)
    {
        $data = $request->all();
        $id = $data['id'];
        $images = $data['images'];
        $deleteImages = $data['delete'];

        //Cập nhật dữ liệu cho bảng
        $apartmentRent = ApartmentRent::findOrFail($id);
        $apartmentRent->fill($data);
        $apartmentRent->save();


        //Thêm ảnh vào server và lưu đường dẫn
        $category = 'apartment_rents';
        $cate_id = $apartmentRent->id;
        $imageUrls = $this->storeImages($images, $category, $cate_id);

        //Xóa các hình cũ được chọn
        $this->deleteImages($deleteImages);

        return response()->json([$apartmentRent, $imageUrls]);
    }

    public function updateApartmentSale(Request $request)
    {
        $data = $request->all();
        $id = $data['id'];
        $images = $data['images'];
        $deleteImages = $data['delete'];

        //Cập nhật dữ liệu cho bảng
        $apartmentSale = ApartmentSale::findOrFail($id);
        $apartmentSale->fill($data);
        $apartmentSale->save();


        //Thêm ảnh vào server và lưu đường dẫn
        $category = 'apartment_sales';
        $cate_id = $apartmentSale->id;
        $imageUrls = $this->storeImages($images, $category, $cate_id);

        //Xóa các hình cũ được chọn
        $this->deleteImages($deleteImages);

        return response()->json([$apartmentSale, $imageUrls]);
    }

    public function updateHouseSale(Request $request)
    {
        $data = $request->all();
        $id = $data['id'];
        $images = $data['images'];
        $deleteImages = $data['delete'];

        //Cập nhật dữ liệu cho bảng
        $houseSale = HouseSale::findOrFail($id);
        $houseSale->fill($data);
        $houseSale->save();


        //Thêm ảnh vào server và lưu đường dẫn
        $category = 'house_sales';
        $cate_id = $houseSale->id;
        $imageUrls = $this->storeImages($images, $category, $cate_id);

        //Xóa các hình cũ được chọn
        $this->deleteImages($deleteImages);

        return response()->json([$houseSale, $imageUrls]);
    }

    public function updateHouseRent(Request $request)
    {
        $data = $request->all();
        $id = $data['id'];
        $images = $data['images'];
        $deleteImages = $data['delete'];

        //Cập nhật dữ liệu cho bảng
        $houseRent = HouseRent::findOrFail($id);
        $houseRent->fill($data);
        $houseRent->save();


        //Thêm ảnh vào server và lưu đường dẫn
        $category = 'house_rents';
        $cate_id = $houseRent->id;
        $imageUrls = $this->storeImages($images, $category, $cate_id);

        //Xóa các hình cũ được chọn
        $this->deleteImages($deleteImages);

        return response()->json([$houseRent, $imageUrls]);
    }

    public function updateVillaSale(Request $request)
    {
        $data = $request->all();
        $id = $data['id'];
        $images = $data['images'];
        $deleteImages = $data['delete'];

        //Cập nhật dữ liệu cho bảng
        $villaSale = VillaSale::findOrFail($id);
        $villaSale->fill($data);
        $villaSale->save();


        //Thêm ảnh vào server và lưu đường dẫn
        $category = 'villa_sales';
        $cate_id = $villaSale->id;
        $imageUrls = $this->storeImages($images, $category, $cate_id);

        //Xóa các hình cũ được chọn
        $this->deleteImages($deleteImages);

        return response()->json([$villaSale, $imageUrls]);
    }

    public function updateVillaRent(Request $request)
    {
        $data = $request->all();
        $id = $data['id'];
        $images = $data['images'];
        $deleteImages = $data['delete'];

        //Cập nhật dữ liệu cho bảng
        $villaRent = VillaRent::findOrFail($id);
        $villaRent->fill($data);
        $villaRent->save();


        //Thêm ảnh vào server và lưu đường dẫn
        $category = 'villa_rents';
        $cate_id = $villaRent->id;
        $imageUrls = $this->storeImages($images, $category, $cate_id);

        //Xóa các hình cũ được chọn
        $this->deleteImages($deleteImages);

        return response()->json([$villaRent, $imageUrls]);
    }



    public function storeImages($images, $category, $cate_id) {
        $arrayUrls = [];
        foreach ($images as $image) {
            $url = $image->store('images/realestate', 'public');
            $newImage = new Images();
            $newImage->cate_id = $cate_id;
            $newImage->category = $category;
            $newImage->url = $url;
            $newImage->save() ? $arrayUrls[] = $newImage->url : null;
        }
        return $arrayUrls;
    }

    public function deleteImages($images) {
        foreach ($images as $image){
            Storage::delete('/public/'.$image);
            DB::table('images')->where('url', $image)->delete();
        }
    }
}
