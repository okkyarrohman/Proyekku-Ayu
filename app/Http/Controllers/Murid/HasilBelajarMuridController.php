<?php

namespace App\Http\Controllers\Murid;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\HasilBelajar;
use App\Models\MataPelajaran;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HasilBelajarMuridController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchMapel = $request->input('searchMapel');

        $hasils = HasilBelajar::where('user_id', Auth::user()->id)->with(['users', 'classes', 'mapels'])
            ->when($searchMapel, function ($query) use ($searchMapel) {
                $query->where('mapel_id', 'like', '%' . $searchMapel . '%');
            })
            ->get();

        return Inertia::render('Murid/Laporan/HasilBelajar/HasilBelajarIndex', compact('hasils'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $hasils = HasilBelajar::where('id', $id)->with(['users', 'classes', 'mapels'])->first();

        $mapels = MataPelajaran::all();

        $classes = Classes::all();

        $users = User::where('role', 'murid')->get();

        return Inertia::render('Murid/Laporan/HasilBelajar/HasilBelajarShow', compact('hasils', 'mapels', 'classes', 'users'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
