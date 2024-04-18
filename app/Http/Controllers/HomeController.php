<?php

namespace App\Http\Controllers;

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
        return view('guru.dashboard');
    }
}
