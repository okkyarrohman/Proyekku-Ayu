<?php

use App\Http\Controllers\Admin\MataPelajaranAdminController;
use App\Http\Controllers\Admin\UserAdminController;
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
        Route::inertia('/data-master', 'Admin/DataMaster/DataMaster')->name('dataMaster.admin');
        Route::prefix('data-master')->group(function () {
            Route::prefix('user-admin')->group(function () {
                Route::inertia('/add', 'Admin/DataMaster/User/UserAdd')->name('user-admin.add');
                Route::get('/{role}', [UserAdminController::class, 'index'])->name('user-admin.index');
                Route::get('/{role}/create', [UserAdminController::class, 'create'])->name('user-admin.create');
                Route::post('/guru/create', [UserAdminController::class, 'storeGuru'])->name('user-admin.storeGuru');
                Route::post('/murid/create', [UserAdminController::class, 'storeMurid'])->name('user-admin.storeMurid');
                Route::get('/{role}/edit/{id}', [UserAdminController::class, 'edit'])->name('user-admin.edit');
                Route::patch('/guru/edit/{id}', [UserAdminController::class, 'updateGuru'])->name('user-admin.updateGuru');
                Route::patch('/murid/edit/{id}', [UserAdminController::class, 'updateMurid'])->name('user-admin.updateMurid');
                Route::get('/{role}/show/{id}', [UserAdminController::class, 'show'])->name('user-admin.show');
                Route::delete('/{role}/delete/{id}', [UserAdminController::class, 'destroy'])->name('user-admin.destroy');
            });
            Route::resources([
                'mapel-admin' => MataPelajaranAdminController::class,
            ]);
        });
    });
});

// Route Guru
Route::group(['middleware' => 'role:guru'], function () {
    Route::prefix('guru')->group(function () {
        // Start Your guru Routes From Here
        Route::get('/dashboard', [HomeController::class, 'guru'])->name('dashboard.guru');
        Route::inertia('/ruang-proyek', 'Guru/RuangProyek/RuangProyek')->name('ruangProyek.guru');
        Route::prefix('ruang-proyek')->group(function () {
            Route::resources([
                'materi-guru' => MateriGuruController::class,
                'tugas-guru' => TugasGuruController::class,
            ]);
        });
    });
});

// Route Murid
Route::group(['middleware' => 'role:murid'], function () {
    Route::prefix('murid')->group(function () {
        // Start Your murid Routes From Here
        Route::get('/dashboard', [HomeController::class, 'murid'])->name('dashboard.murid');
        Route::inertia('/ruang-proyek', 'Murid/RuangProyek/RuangProyek')->name('ruangProyek.murid');
        Route::prefix('ruang-proyek')->group(function () {
            Route::resources([
                'materi' => MateriMuridController::class,
                'tugas' => TugasMuridController::class,
            ]);
        });
        Route::inertia('/laporan', 'Murid/Laporan/Laporan')->name('laporan.murid');
        Route::inertia('/pengaturan', 'Pengaturan/Pengaturan')->name('pengaturan.murid');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
