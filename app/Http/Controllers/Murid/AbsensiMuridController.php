<?php

namespace App\Http\Controllers\Murid;

use App\Http\Controllers\Controller;
use App\Models\Absensi;
use App\Models\AbsensiUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AbsensiMuridController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchClass = $request->input('searchClass');
        $searchMapel = $request->input('searchMapel');

        $absens = Absensi::where('class_id', Auth::user()->class_id)->with(['classes', 'mapels', 'user_presents'])
            ->when($searchClass, function ($query) use ($searchClass) {
                $query->where('class_id', 'like', '%' . $searchClass . '%');
            })
            ->when($searchMapel, function ($query) use ($searchMapel) {
                $query->where('mapel_id', 'like', '%' . $searchMapel . '%');
            })
            ->orderBy('date', 'asc')
            ->get();

        return Inertia::render('Murid/Laporan/Absensi/AbsensiIndex', compact('absens'));
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
        //
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

    public function hadir(string $id)
    {
        AbsensiUser::create([
            'absen_id' => $id,
            'user_id' => Auth::user()->id
        ]);

        return to_route('dashboard.murid');
    }
}
