<?php

use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
     public function run()
     {
         //
         $list = \App\Models\ApartmentRent::all();
         $category = 'apartment_rents';
         foreach($list as $item){
             $id = $item->id;

             for($i = 1; $i <= 8 ; $i++) {
                 $image = new \App\Models\Images();
                 $image->cate_id = $id;
                 $image->category = $category;
                 $image->url = "images/realestate/apartment/apartment0".$i.".jpg";
                 $image->save();
             }

         };
         $list = \App\Models\ApartmentSale::all();
         $category = 'apartment_sales';
         foreach($list as $item){
             $id = $item->id;

             for($i = 1; $i <= 8 ; $i++) {
                 $image = new \App\Models\Images();
                 $image->cate_id = $id;
                 $image->category = $category;
                 $image->url = "images/realestate/apartment/apartment0".$i.".jpg";
                 $image->save();
             }

         };
         $list = \App\Models\HouseSale::all();
         $category = 'house_sales';
         foreach($list as $item){
             $id = $item->id;

             for($i = 1; $i <= 8 ; $i++) {
                 $image = new \App\Models\Images();
                 $image->cate_id = $id;
                 $image->category = $category;
                 $image->url = "images/realestate/house/house0".$i.".jpg";
                 $image->save();
             }

         }
         ;
         $list = \App\Models\HouseRent::all();
         $category = 'house_rents';
         foreach($list as $item){
             $id = $item->id;

             for($i = 1; $i <= 8 ; $i++) {
                 $image = new \App\Models\Images();
                 $image->cate_id = $id;
                 $image->category = $category;
                 $image->url = "images/realestate/house/house0".$i.".jpg";
                 $image->save();
             }

         }
         ;
         $list = \App\Models\VillaSale::all();
         $category = 'villa_sales';
         foreach($list as $item){
             $id = $item->id;

             for($i = 1; $i <= 8 ; $i++) {
                 $image = new \App\Models\Images();
                 $image->cate_id = $id;
                 $image->category = $category;
                 $image->url = "images/realestate/villa/villa0".$i.".jpg";
                 $image->save();
             }

         }
         ;
         $list = \App\Models\VillaRent::all();
         $category = 'villa_rents';
         foreach($list as $item){
             $id = $item->id;

             for($i = 1; $i <= 8 ; $i++) {
                 $image = new \App\Models\Images();
                 $image->cate_id = $id;
                 $image->category = $category;
                 $image->url = "images/realestate/villa/villa0".$i.".jpg";
                 $image->save();
             }

         }
         ;
         $list = \App\Models\PlotSale::all();
         $category = 'plot_sales';
         foreach($list as $item){
             $id = $item->id;

             for($i = 1; $i <= 8 ; $i++) {
                 $image = new \App\Models\Images();
                 $image->cate_id = $id;
                 $image->category = $category;
                 $image->url = "images/realestate/plot/plot0".$i.".jpg";
                 $image->save();
             }

         }
         ;
         $list = \App\Models\PlotRent::all();
         $category = 'plot_rents';
         foreach($list as $item){
             $id = $item->id;

             for($i = 1; $i <= 8 ; $i++) {
                 $image = new \App\Models\Images();
                 $image->cate_id = $id;
                 $image->category = $category;
                 $image->url = "images/realestate/plot/plot0".$i.".jpg";
                 $image->save();
             }

         }
         $list = \App\Models\Project::all();
         $category = 'projects';
         foreach($list as $item){
             $id = $item->id;

             for($i = 1; $i <= 4 ; $i++) {
                 $image = new \App\Models\Images();
                 $image->cate_id = $id;
                 $image->category = $category;
                 $image->url = "images/realestate/project/project0".$i.".jpg";
                 $image->save();
             }

         }




     }

}

