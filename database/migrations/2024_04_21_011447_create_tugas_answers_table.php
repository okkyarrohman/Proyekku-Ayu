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
            $table->longText('answer_1');
            $table->longText('answer_2')->nullable();
            $table->longText('answer_3');
            $table->longText('answer_4');
            $table->longText('answer_5');
            $table->longText('answer_6');
            $table->timestamps();

            $table->foreign('tugas_id')->references('id')->on('tugases');
            $table->foreign('user_id')->references('id')->on('users');
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
