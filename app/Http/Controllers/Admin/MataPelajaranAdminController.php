<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MataPelajaran;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MataPelajaranAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $mapels = MataPelajaran::all();

        return Inertia::render('Admin/MataPelajaran/MataPelajaranIndex', compact('mapels'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/MataPelajaran/MataPelajaranCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $mapels = MataPelajaran::create([
            'name' => $request->name,
            'class_id' => $request->class_id,
            'guru_id' => $request->guru_id
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $mapels = MataPelajaran::where('id', $id)->first();

        return Inertia::render('Admin/MataPelajaran/MataPelajaranShow', compact('mapels'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $mapels = MataPelajaran::where('id', $id)->first();

        return Inertia::render('Admin/MataPelajaran/MataPelajaranEdit', compact('mapels'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $mapels = MataPelajaran::find($id);

        $mapelsUpdate = $request->all();

        $mapels->update($mapelsUpdate);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $mapels = MataPelajaran::find($id);

        $mapels->delete();
    }
}
