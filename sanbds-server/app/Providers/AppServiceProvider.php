<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //Apartment
        $this->app->singleton(
            \App\Repositories\Interfaces\IApartmentRentRepository::class,
            \App\Repositories\EloquentRepositories\ApartmentRentRepository::class
        );
        $this->app->singleton(
            \App\Repositories\Interfaces\IApartmentSaleRepository::class,
            \App\Repositories\EloquentRepositories\ApartmentSaleRepository::class
        );
        //House
        $this->app->singleton(
            \App\Repositories\Interfaces\IHouseRentRepository::class,
            \App\Repositories\EloquentRepositories\HouseRentRepository::class
        );
        $this->app->singleton(
            \App\Repositories\Interfaces\IHouseSaleRepository::class,
            \App\Repositories\EloquentRepositories\HouseSaleRepository::class
        );
        //Plot
        $this->app->singleton(
            \App\Repositories\Interfaces\IPlotRentRepository::class,
            \App\Repositories\EloquentRepositories\PlotRentRepository::class
        );
        $this->app->singleton(
            \App\Repositories\Interfaces\IPlotSaleRepository::class,
            \App\Repositories\EloquentRepositories\PlotSaleRepository::class
        );
        //Villa
        $this->app->singleton(
            \App\Repositories\Interfaces\IVillaRentRepository::class,
            \App\Repositories\EloquentRepositories\VillaRentRepository::class
        );
        $this->app->singleton(
            \App\Repositories\Interfaces\IVillaSaleRepository::class,
            \App\Repositories\EloquentRepositories\VillaSaleRepository::class
        );
        $this->app->singleton(
            \App\Repositories\Interfaces\IImageRepository::class,
            \App\Repositories\EloquentRepositories\ImageRepository::class
        );
        $this->app->singleton(
            \App\Repositories\Interfaces\IProjectRepository::class,
            \App\Repositories\EloquentRepositories\ProjectRepository::class
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
