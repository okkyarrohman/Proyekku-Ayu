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
        Schema::create('absensis', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->unsignedBigInteger('class_id');
            $table->unsignedBigInteger('mapel_id');
            $table->string('meeting');
            $table->timestamps();

            $table->foreign('class_id')->references('id')->on('classes');
            $table->foreign('mapel_id')->references('id')->on('mata_pelajarans');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('absensis');
    }
};
