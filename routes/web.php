<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\HomeController;

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
    });
});

// Route Murid
Route::group(['middleware' => 'role:murid'], function () {
    Route::prefix('murid')->group(function () {
        // Start Your murid Routes From Here
        Route::get('/dashboard', [HomeController::class, 'murid'])->name('dashboard.murid');
    });
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
