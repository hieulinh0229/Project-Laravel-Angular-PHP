<?php

namespace App\Http\Controllers;

use App\Repositories\Interfaces\IImageRepository;
use Illuminate\Http\Request;

class ImagesController extends Controller
{
    private $imgRepo;

    public function __construct(IImageRepository $imgRepo)
    {
        $this->imgRepo = $imgRepo;
    }

    public function uploadImages(Request $rq) {
        $file = $rq->file;
        $path = $this->imgRepo->storeImage($file);
        return response()->json(['name' => $file->getClientOriginalName(), 'url' => $path]);
    }
}
