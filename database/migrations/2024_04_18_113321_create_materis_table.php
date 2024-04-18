<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('materis', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('desc');
            $table->string('cover');
            $table->string('file');
            $table->string('link_video');
            $table->unsignedBigInteger('mapel_id');
            $table->timestamps();

            $table->foreign('mapel_id')->references('id')->on('mata_pelajarans');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materis');
    }
};
