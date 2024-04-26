<?php

namespace App\Http\Controllers;

use App\Models\MataPelajaran;
use App\Models\User;
use Illuminate\Http\Request;
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
        return Inertia::render('Guru/Dashboard');
    }

    public function murid()
    {
        return Inertia::render('Murid/Dashboard');
    }

    public function admin()
    {
        $users = User::all();

        $mapels = MataPelajaran::all();

        return Inertia::render('Admin/Dashboard', compact('users', 'mapels'));
    }
}
