<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(ProvincesSeeder::class);
        // $this->call(HousesSeeder::class);
        // $this->call(ImagesSeeder::class);
        // $this->call(HouseSalesSeeder::class);
        $this->call(HouseSaleSeeder::class);
        $this->call(HouseRentSeeder::class);
        $this->call(ApartmentSaleSeeder::class);
        $this->call(ApartmentRentSeeder::class);
        $this->call(PlotSaleSeeder::class);
        $this->call(PlotRentSeeder::class);
        $this->call(VillaSaleSeeder::class);
        $this->call(VillaRentSeeder::class);
        $this->call(ProjectSeeder::class);
        $this->call(ImageSeeder::class);
        $this->call(FeedbackSeeder::class);

    }
}
