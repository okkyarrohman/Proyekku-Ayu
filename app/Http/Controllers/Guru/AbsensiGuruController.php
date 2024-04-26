<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Absensi;
use App\Models\AbsensiUser;
use App\Models\Classes;
use App\Models\MataPelajaran;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AbsensiGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchClass = $request->input('searchClass');
        $searchMapel = $request->input('searchMapel');

        $mapels = MataPelajaran::where('guru_id', Auth::user()->id)->get();

        $classes = Classes::all();

        $absens = Absensi::with(['classes', 'mapels', 'user_presents'])
            ->when($searchClass, function ($query) use ($searchClass) {
                $query->where('class_id', 'like', '%' . $searchClass . '%');
            })
            ->when($searchMapel, function ($query) use ($searchMapel) {
                $query->where('mapel_id', 'like', '%' . $searchMapel . '%');
            })
            ->orderBy('date', 'asc')
            ->get();

        return Inertia::render('Guru/Laporan/Absensi/AbsensiIndex', compact('absens', 'classes', 'mapels'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $mapels = MataPelajaran::where('guru_id', Auth::user()->id)->get();

        $classes = Classes::all();

        return Inertia::render('Guru/Laporan/Absensi/AbsensiCreate', compact('mapels', 'classes'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Absensi::create([
            'date' => $request->date,
            'class_id' => $request->class_id,
            'mapel_id' => $request->mapel_id,
            'meeting' => $request->meeting,
        ]);

        return to_route('absensi-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $absens = Absensi::where('id', $id)->with(['classes', 'mapels', 'user_presents.users'])->first();

        $users = User::where('role', 'murid')->get();

        $absenPresents = AbsensiUser::where('absen_id', $id)->with(['absens.mapels', 'absens.classes', 'users'])->get();

        return Inertia::render('Guru/Laporan/Absensi/AbsensiShow', compact('absens', 'absenPresents', 'users'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $absens = Absensi::where('id', $id)->first();

        $mapels = MataPelajaran::where('guru_id', Auth::user()->id)->get();

        $classes = Classes::all();

        return Inertia::render('Guru/Laporan/Absensi/AbsensiEdit', compact('absens', 'mapels', 'classes'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $absens = Absensi::findOrFail($id);

        $absensUpdate = $request->all();

        $absens->update($absensUpdate);

        return to_route('absensi-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $absens = Absensi::findOrFail($id);

        $absens->delete();

        return to_route('absensi-guru.index');
    }

    public function destroyPresent($presentId)
    {
        $absenPresents = AbsensiUser::findOrFail($presentId);

        $absenPresents->delete();

        return redirect()->back();
    }
}
