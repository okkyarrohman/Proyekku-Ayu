<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\HasilBelajar;
use App\Models\MataPelajaran;
use App\Models\Tugas;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HasilBelajarGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchMapel = $request->input('searchMapel');
        $searchClass = $request->input('searchClass');

        $mapels = MataPelajaran::all();

        $classes = Classes::all();

        $hasils = HasilBelajar::with(['users', 'classes', 'mapels'])
            ->when($searchClass, function ($query) use ($searchClass) {
                $query->where('class_id', 'like', '%' . $searchClass . '%');
            })
            ->when($searchMapel, function ($query) use ($searchMapel) {
                $query->where('mapel_id', 'like', '%' . $searchMapel . '%');
            })
            ->get();

        return Inertia::render('Guru/Laporan/HasilBelajar/HasilBelajarIndex', compact('hasils', 'mapels', 'classes'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $tugases = Tugas::all();

        $mapels = MataPelajaran::where('guru_id', Auth::user()->id)->get();

        $classes = Classes::all();

        $users = User::where('role', 'murid')->get();

        return Inertia::render('Guru/Laporan/HasilBelajar/HasilBelajarCreate', compact('tugases', 'mapels', 'classes', 'users'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        HasilBelajar::create([
            'class_id' => $request->class_id,
            'user_id' => $request->user_id,
            'mapel_id' => $request->mapel_id,
            'grade' => $request->grade,
            'grade_index' => $request->grade_index,
            'meeting' => $request->meeting,
            'detail' => $request->detail
        ]);

        return to_route('hasil-belajar-guru.index');
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

        return Inertia::render('Guru/Laporan/HasilBelajar/HasilBelajarShow', compact('hasils', 'mapels', 'classes', 'users'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $hasils = HasilBelajar::where('id', $id)->with(['users', 'classes', 'mapels'])->first();

        $mapels = MataPelajaran::where('guru_id', Auth::user()->id)->get();

        $classes = Classes::all();

        $users = User::where('role', 'murid')->get();

        return Inertia::render('Guru/Laporan/HasilBelajar/HasilBelajarEdit', compact('hasils', 'mapels', 'classes', 'users'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $hasils = HasilBelajar::findOrFail($id);

        $hasilsUpdate = $request->all();

        $hasils->update($hasilsUpdate);

        return to_route('hasil-belajar-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $hasils = HasilBelajar::findOrFail($id);

        $hasils->delete();

        return to_route('hasil-belajar-guru.index');
    }
}
