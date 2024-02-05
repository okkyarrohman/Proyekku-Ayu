<?php

use App\Http\Controllers\Guru\MateriGuruController;
use App\Http\Controllers\Guru\TugasGuruController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Murid\MateriMuridController;
use App\Http\Controllers\Murid\TugasMuridController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Landing Pages
Route::view('/', 'welcome')->name('landing-page');

// Route Guru
Route::group(['middleware' => 'role:guru'], function () {
    Route::prefix('guru')->group(function () {
        // Start Your guru Routes From Here
        Route::get('/dashboard', [HomeController::class, 'guru'])->name('dashboard.guru');
        Route::resources([
            'materi-guru' => MateriGuruController::class,
            'tugas-guru' => TugasGuruController::class,
        ]);
    });
});

// Route Murid
Route::group(['middleware' => 'role:murid'], function () {
    Route::prefix('murid')->group(function () {
        // Start Your murid Routes From Here
        Route::get('/dashboard', [HomeController::class, 'murid'])->name('dashboard.murid');

        Route::resources([
            'materi' => MateriMuridController::class,
            'tugas' => TugasMuridController::class,
        ]);
    });
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
