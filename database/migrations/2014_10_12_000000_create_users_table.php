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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('photo')->nullable();
            $table->unsignedBigInteger('class_id')->nullable();
            // $table->unsignedBigInteger('kelompok_id')->nullable();
            $table->string('nip')->nullable();
            $table->enum('role', ['murid', 'guru', 'admin']);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->string('session_login_at')->nullable();
            $table->integer('total_login_time')->nullable();
            $table->timestamps();

            $table->foreign('class_id')->references('id')->on('classes');
            // $table->foreign('kelompok_id')->references('id')->on('kelompoks');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
