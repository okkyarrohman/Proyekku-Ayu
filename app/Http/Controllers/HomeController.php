<?php

namespace App\Http\Controllers;

use App\Models\Absensi;
use App\Models\HasilBelajar;
use App\Models\MataPelajaran;
use App\Models\Tugas;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function guru()
    {
        $currentDate = Carbon::now()->toDateString();

        $murids = User::where('role', 'murid')->get();

        $mapels = MataPelajaran::all();

        $absensis = Absensi::where('date', $currentDate)
                    ->with(['classes', 'mapels', 'user_presents'])
                    ->whereHas('mapels', function ($query) {
                        $query->where('guru_id', Auth::user()->id);
                    })
                    ->first();

        $tugases = Tugas::with(['classes', 'answers', 'kelompoks'])->latest()->take(4)->get();

        return Inertia::render('Guru/Dashboard', compact('murids', 'mapels' , 'absensis', 'tugases'));
    }

    public function murid()
    {
        $currentDate = Carbon::now()->toDateString();

        $absensis = Absensi::where('date', $currentDate)
                    ->where('class_id', Auth::user()->class_id)
                    ->with(['classes', 'mapels', 'user_presents'])
                    ->first();

        $tugases = Tugas::with(['classes', 'answers.kelompoks.members', 'kelompoks'])
                    ->where('class_id', Auth::user()->class_id)
                    ->latest()->take(4)->get();

        $hasilBelajars = HasilBelajar::where('user_id', Auth::user()->id)
                            ->with(['classes', 'mapels'])
                            ->latest()->take(5)->get();

        return Inertia::render('Murid/Dashboard', compact('absensis', 'tugases', 'hasilBelajars'));
    }

    public function admin()
    {
        $users = User::all();

        $mapels = MataPelajaran::all();

        return Inertia::render('Admin/Dashboard', compact('users', 'mapels'));
    }
}
