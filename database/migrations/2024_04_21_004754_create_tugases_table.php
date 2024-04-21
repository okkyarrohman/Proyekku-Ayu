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
        Schema::create('tugases', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('desc');
            $table->string('cover');
            $table->date('deadline');
            $table->unsignedBigInteger('class_id');
            $table->string('step_1');
            $table->longText('desc_1');
            $table->string('step_2');
            $table->longText('desc_2');
            $table->string('step_3');
            $table->longText('desc_3');
            $table->string('step_4');
            $table->longText('desc_4');
            $table->string('step_5');
            $table->longText('desc_5');
            $table->string('step_6');
            $table->longText('desc_6');
            $table->timestamps();

            $table->foreign('class_id')->references('id')->on('classes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tugases');
    }
};
