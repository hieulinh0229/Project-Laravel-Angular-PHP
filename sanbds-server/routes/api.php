<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('signup', 'AuthController@register'); 
Route::post('login', 'AuthController@login');
Route::get('user','UserProfileController@getUserProfile');
Route::get('user/{id}', 'UserProfileController@getUserProfileById');
Route::post('user/roles/{id}', 'UserProfileController@updateRoles');
Route::get('admin', 'UserProfileController@getAdmin');
Route::get('admin/{id}', 'UserProfileController@getAdminById');

Route::group(['middleware' => 'jwt.auth'], function () { 
    Route::get('auth', 'AuthController@user');
    Route::post('logout', 'AuthController@logout');
});

Route::middleware('jwt.refresh')->get('/token/refresh', 'AuthController@refresh');

//Plot for sale RESTful API
Route::get('plot-sale', 'RealEstate\PlotSaleController@getAll');
Route::get('plot-sale/{id}', 'RealEstate\PlotSaleController@get');
Route::post('plot-sale', 'RealEstate\PlotSaleController@create');
Route::patch('plot-sale/{id}', 'RealEstate\PlotSaleController@update');

// Plot for rent RESTful API
Route::get('plot-rent', 'RealEstate\PlotRentController@getAll');
Route::get('plot-rent/{id}', 'RealEstate\PlotRentController@get');
Route::post('plot-rent', 'RealEstate\PlotRentController@create');
Route::patch('plot-rent/{id}', 'RealEstate\PlotRentController@update');

// House for sale RESTful API
Route::get('house-sale', 'RealEstate\HouseSaleController@getAll');
Route::get('house-sale/{id}', 'RealEstate\HouseSaleController@get');
Route::post('house-sale', 'RealEstate\HouseSaleController@create');
Route::patch('house-sale/{id}', 'RealEstate\HouseSaleController@update');

// House for rent RESTful API
Route::get('house-rent', 'RealEstate\HouseRentController@getAll');
Route::get('house-rent/{id}', 'RealEstate\HouseRentController@get');
Route::post('house-rent', 'RealEstate\HouseRentController@create');
Route::patch('house-rent/{id}', 'RealEstate\HouseRentController@update');

// Villa for sale RESTful API
Route::get('villa-sale', 'RealEstate\VillaSaleController@getAll');
Route::get('villa-sale/{id}', 'RealEstate\VillaSaleController@get');
Route::post('villa-sale', 'RealEstate\VillaSaleController@create');
Route::patch('villa-sale/{id}', 'RealEstate\VillaSaleController@update');

// Villa for rent RESTful API
Route::get('villa-rent', 'RealEstate\VillaRentController@getAll');
Route::get('villa-rent/{id}', 'RealEstate\VillaRentController@get');
Route::post('villa-rent', 'RealEstate\VillaRentController@create');
Route::patch('villa-rent/{id}', 'RealEstate\VillaRentController@update');

// Apartment for sale RESTful API
Route::get('apartment-sale', 'RealEstate\ApartmentSaleController@getAll');
Route::get('apartment-sale/{id}', 'RealEstate\ApartmentSaleController@get');
Route::post('apartment-sale', 'RealEstate\ApartmentSaleController@create');
Route::patch('apartment-sale/{id}', 'RealEstate\ApartmentSaleController@update');

// Apartment for rent RESTful API
Route::get('apartment-rent', 'RealEstate\ApartmentRentController@getAll');
Route::get('apartment-rent/{id}', 'RealEstate\ApartmentRentController@get');
Route::post('apartment-rent', 'RealEstate\ApartmentRentController@create');
Route::patch('apartment-rent/{id}', 'RealEstate\ApartmentRentController@update');
// Project for rent RESTful API
Route::get('project', 'RealEstate\ProjectController@getAll');
Route::get('project/{id}', 'RealEstate\ProjectController@get');
Route::post('project', 'RealEstate\ProjectController@create');
Route::patch('project/{id}', 'RealEstate\ProjectController@update');
//Feedback RESTful API
Route::get('feedback', 'FeedbackController@getALL');
Route::get('feedback/{id}', 'FeedbackController@get');
Route::post('create/feedback', 'FeedbackController@store');
Route::patch('feedback/{id}', 'FeedbackController@update');
Route::delete('feedback/{id}', 'FeedbackController@delete');
Route::post('create/returnfeedback','ReturnFeedbackController@store');

Route::group(['prefix' => 'create', 'middleware' => 'cors'],function(){
    Route::post('house-sale', 'RealEstate\HouseSaleController@create');
    Route::post('house-rent', 'RealEstate\HouseRentController@create');

    Route::post('apartment-rent', 'RealEstate\ApartmentRentController@create');
    Route::post('apartment-sale', 'RealEstate\ApartmentSaleController@create');

    Route::post('plot-sale', 'RealEstate\PlotSaleController@create');
    Route::post('plot-rent', 'RealEstate\PlotRentController@create');

    Route::post('villa-rent', 'RealEstate\VillaRentController@create');
    Route::post('villa-sale', 'RealEstate\VillaSaleController@create');
});

Route::prefix('upload')->group(function() {
    Route::post('images', 'ImagesController@uploadImages');
});

Route::prefix('get')->group(function() {
    Route::get('local', 'GetInfoController@getLocal');
});

Route::prefix('get-list')->group(function () {
    Route::get('house-sale', 'GetListController@houseSale');
    Route::get('house-rent', 'GetListController@houseSale');

    Route::get('villa-sale', 'GetListController@villaSale');
    Route::get('villa-rent', 'GetListController@villaRent');

    Route::get('apartment-sale', 'GetListController@apartmentSale');
    Route::get('apartment-rent', 'GetListController@apartmentRent');

    Route::get('plot-sale', 'GetListController@plotSale');
    Route::get('plot-rent', 'GetListController@plotRent');
});

Route::prefix('user-manager')->group(function () {
    Route::get('', 'UserManagerController@getList');
    Route::get('{id}', 'UserManagerController@getUser');
});

Route::post('lichhen', 'LichHenController@lichHen');