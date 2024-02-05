<?php

use Illuminate\Support\Facades\Route;

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
    route::prefix('guru')->group(function () {
        // Start Your Guru Routes From Here
    });
});

// Route Murid
Route::group(['middleware' => 'role:murid'], function () {
    route::prefix('murid')->group(function () {
        // Start Your murid Routes From Here
    });
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
