<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MateriGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return view('guru.materi.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('guru.materi.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return redirect()->route('materi-guru.index')->with('success', 'Data Berhasil Ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return view('guru.materi.show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return view('guru.materi.edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return redirect()->route('materi-guru.index')->with('success', 'Data Berhasil Diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return redirect()->route('materi-guru.index')->with('success', 'Data Berhasil Dihapus');
    }
}
