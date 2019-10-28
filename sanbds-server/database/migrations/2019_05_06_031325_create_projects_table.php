<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('tenduan',191);
            $table->string('chudautu',191);
            $table->string('donvithicong',191)->nullable();
            $table->text('diachi');
            $table->text('mota')->nullable();
            $table->text('matdoxaydung')->nullable();
            $table->float('dientich')->nullable();
            $table->float('dientichmatnuoc')->nullable();
            $table->float('dientichcayxanh')->nullable();
            $table->string('quymoduan',191)->nullable();
            $table->string('namxaydung',100)->nullable();
            $table->string('nambangiao',100)->nullable();
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
        Schema::dropIfExists('projects');
    }
}
