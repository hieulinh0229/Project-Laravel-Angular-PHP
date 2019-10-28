<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlotRentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plot_rents', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('ngayhethan')->nullable();
            $table->boolean('trangthai')->default(true);
            $table->decimal('gia');
            $table->unsignedTinyInteger('thoigianthue')->nullable();
            $table->float('chieudai')->nullable();
            $table->float('chieurong')->nullable();
            $table->float('dientich');
            $table->text('phaply')->nullable();
            $table->text('diachi');
            $table->string('huong',191)->nullable();
            $table->text('mota')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
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
        Schema::dropIfExists('plot_rents');
    }
}
