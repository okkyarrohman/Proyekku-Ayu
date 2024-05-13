<?php

use App\Http\Controllers\Admin\MataPelajaranAdminController;
use App\Http\Controllers\Admin\NotifikasiAdminController;
use App\Http\Controllers\Admin\UserAdminController;
use App\Http\Controllers\Guru\AbsensiGuruController;
use App\Http\Controllers\Guru\HasilBelajarGuruController;
use App\Http\Controllers\Guru\KelompokGuruController;
use App\Http\Controllers\Guru\MateriGuruController;
use App\Http\Controllers\Guru\NotifikasiGuruController;
use App\Http\Controllers\Guru\TugasGuruController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Murid\AbsensiMuridController;
use App\Http\Controllers\Murid\HasilBelajarMuridController;
use App\Http\Controllers\Murid\KelompokMuridController;
use App\Http\Controllers\Murid\MateriMuridController;
use App\Http\Controllers\Murid\NotifikasiMuridController;
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

Route::get('/link', function () {
    $target = '/home/proyekku/proyekku/storage/app/public';
    $shortcut = '/home/proyekku/public_html/storage';
    symlink($target, $shortcut);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route Admin
Route::group(['middleware' => 'role:admin'], function () {
    Route::prefix('admin')->group(function () {
        // Start Your admin Routes From Here
        Route::get('/dashboard', [HomeController::class, 'admin'])->name('dashboard.admin');
        Route::get('/data-master', function () {
            return Inertia::render('Admin/DataMaster/DataMaster');
        })->name('dataMaster.admin');
        Route::prefix('data-master')->group(function () {
            Route::prefix('user-admin')->group(function () {
                Route::get('/add', function () {
                    return Inertia::render('Admin/DataMaster/User/UserAdd');
                })->name('user-admin.add');
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
                'notifikasi-admin' => NotifikasiAdminController::class,
            ]);
        });
    });
});

// Route Guru
Route::group(['middleware' => 'role:guru'], function () {
    Route::prefix('guru')->group(function () {
        // Start Your guru Routes From Here
        Route::get('/dashboard', [HomeController::class, 'guru'])->name('dashboard.guru');
        Route::get('/ruang-proyek', function () {
            return Inertia::render('Guru/RuangProyek/RuangProyek');
        })->name('ruangProyek.guru');

        Route::prefix('ruang-proyek')->group(function () {
            Route::resources([
                'materi-guru' => MateriGuruController::class,
                'tugas-guru' => TugasGuruController::class,
                'kelompok-guru' => KelompokGuruController::class,
            ]);
            Route::get('/tugas-guru/detail/{id}', [TugasGuruController::class, 'detail'])->name('tugas-guru.detail');
            Route::get('/tugas-guru/hasil/{id}', [TugasGuruController::class, 'hasil'])->name('tugas-guru.hasil');
        });
        Route::get('/laporan', function () {
            return Inertia::render('Guru/Laporan/Laporan');
        })->name('laporan.guru');
        Route::prefix('laporan')->group(function () {
            Route::resources([
                'hasil-belajar-guru' => HasilBelajarGuruController::class,
                'absensi-guru' => AbsensiGuruController::class
            ]);
            Route::delete('/absensi-guru/{presentId}/delete', [AbsensiGuruController::class, 'destroyPresent'])->name('absensi-guru.destroyPresent');
        });
        Route::resources([
            'notifikasi-guru' => NotifikasiGuruController::class,
        ]);
    });
});

// Route Murid
Route::group(['middleware' => 'role:murid'], function () {
    Route::prefix('murid')->group(function () {
        // Start Your murid Routes From Here
        Route::get('/dashboard', [HomeController::class, 'murid'])->name('dashboard.murid');
        Route::get('/ruang-proyek', function () {
            return Inertia::render('Murid/RuangProyek/RuangProyek');
        })->name('ruangProyek.murid');
        Route::prefix('ruang-proyek')->group(function () {
            Route::resources([
                'materi' => MateriMuridController::class,
                'tugas' => TugasMuridController::class,
                'kelompok' => KelompokMuridController::class,
            ]);
            Route::get('/tugas/detail/{id}', [TugasMuridController::class, 'detail'])->name('tugas.detail');
        });
        Route::get('/laporan', function () {
            return Inertia::render('Murid/Laporan/Laporan');
        })->name('laporan.murid');
        Route::prefix('laporan')->group(function () {
            Route::resources([
                'hasil-belajar' => HasilBelajarMuridController::class,
                'absensi' => AbsensiMuridController::class
            ]);
            Route::get('/absensi/{id}/hadir', [AbsensiMuridController::class, 'hadir'])->middleware('auth')->name('absen.hadir');
        });
        Route::resources([
            'notifikasi' => NotifikasiMuridController::class,
        ]);
    });
});

Route::middleware('auth')->group(function () {
    Route::get(
        '/pengaturan',
        function () {
            return Inertia::render('Pengaturan/Pengaturan');
        }
    )->name('pengaturan.index');
    Route::prefix('pengaturan')->group(function () {
        Route::get('/profile', [ProfileController::class, 'show'])->name('profile.show');
        Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile/edit/{id}', [ProfileController::class, 'update'])->name('profile.update');
        Route::get('/panduan', function () {
            return Inertia::render('Pengaturan/Panduan/PanduanShow');
        })->name('panduan.show');
        Route::get('/panduan/detail', function () {
            return Inertia::render('Pengaturan/Panduan/PanduanDetail');
        })->name('panduan.detail');
    });
});

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
