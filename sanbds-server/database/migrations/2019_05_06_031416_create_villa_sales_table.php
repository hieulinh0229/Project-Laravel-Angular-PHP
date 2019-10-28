<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVillaSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('villa_sales', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->decimal('gia');
            $table->date('ngayhethan')->nullable();
            $table->boolean('trangthai')->default(true);
            $table->string('huongnha',191)->nullable();
            $table->float('chieudai')->nullable();
            $table->float('chieurong')->nullable();
            $table->float('dientich');
            $table->float('dientichtongsan')->nullable();
            $table->unsignedTinyInteger('sotang')->nullable();
            $table->unsignedTinyInteger('phongngu')->nullable();
            $table->unsignedTinyInteger('phongtam')->nullable();
            $table->text('diachi');
            $table->text('mota')->nullable();
            $table->string('namxaydung',100)->nullable();
            $table->text('phaply')->nullable();
            $table->boolean('garage')->default(false);
            $table->boolean('sanvuon')->default(false);
            $table->boolean('beboi')->default(false);
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('project_id')->nullable();
            $table->unsignedSmallInteger('district_id');
            $table->boolean('published')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('villa_sales');
    }
}
