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
        Schema::create('tugas_answers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tugas_id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('kelompok_id');
            $table->longText('answer_1')->nullable();
            // $table->longText('answer_2')->nullable();
            $table->longText('answer_3')->nullable();
            $table->longText('answer_4')->nullable();
            $table->longText('answer_5')->nullable();
            $table->longText('answer_6')->nullable();
            $table->timestamps();

            $table->foreign('tugas_id')->references('id')->on('tugases');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('kelompok_id')->references('id')->on('kelompoks');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tugas_answers');
    }
};
