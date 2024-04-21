<?php

use App\Models\TugasAnswer;
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
        Schema::create('tugas_answer_dates', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('answer_id');
            $table->date('date_1');
            $table->date('date_2');
            $table->date('date_3');
            $table->date('date_4');
            $table->timestamps();

            $table->foreign('answer_id')->references('id')->on('tugas_answers');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tugas_answer_dates');
    }
};
