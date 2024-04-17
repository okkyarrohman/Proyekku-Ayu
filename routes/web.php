<?php

use App\Http\Controllers\Guru\MateriGuruController;
use App\Http\Controllers\Guru\TugasGuruController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Murid\MateriMuridController;
use App\Http\Controllers\Murid\TugasMuridController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Landing', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route Admin
Route::group(['middleware' => 'role:admin'], function () {
    Route::prefix('admin')->group(function () {
        // Start Your admin Routes From Here
        Route::get('/dashboard', [HomeController::class, 'admin'])->name('dashboard.admin');
    });
});

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

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
