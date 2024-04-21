<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\Tugas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TugasGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchClass = $request->input('searchClass');

        $classes = Classes::all();

        $tugases = Tugas::with(['classes'])
            ->when($searchClass, function ($query) use ($searchClass) {
                $query->where('class_id', 'like', '%' . $searchClass . '%');
            })
            ->get();

        return Inertia::render('Guru/RuangProyek/Tugas/TugasIndex', compact('tugases', 'classes'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $classes = Classes::all();

        return Inertia::render('Guru/RuangProyek/Tugas/TugasCreate', compact('classes'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->hasFile('cover')) {
            $cover = $request->file('cover');
            $extension = $cover->getClientOriginalName();
            $coverName = date('YmdHis') . "." . $extension;
            $cover->move(storage_path('app/public/tugas/cover'), $coverName);
        };

        Tugas::create([
            'name' => $request->name,
            'desc' => $request->desc,
            'cover' => $coverName,
            'deadline' => $request->deadline,
            'class_id' => $request->class_id,
            'step_1' => $request->step_1,
            'desc_1' => $request->desc_1,
            'step_2' => $request->step_2,
            'desc_2' => $request->desc_2,
            'step_3' => $request->step_3,
            'desc_3' => $request->desc_3,
            'step_4' => $request->step_4,
            'desc_4' => $request->desc_4,
            'step_5' => $request->step_5,
            'desc_5' => $request->desc_5,
            'step_6' => $request->step_6,
            'desc_6' => $request->desc_6,
        ]);

        return to_route('tugas-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tugases = Tugas::where('id', $id)->with(['classes'])->first();

        $classes = Classes::all();

        return Inertia::render('Guru/RuangProyek/Tugas/TugasShow', compact('tugases'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $tugases = Tugas::where('id', $id)->first();

        $classes = Classes::all();

        return Inertia::render('Guru/RuangProyek/Tugas/TugasEdit', compact('tugases', 'classes'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $tugases = Tugas::findOrFail($id);

        if ($request->hasFile('cover')) {
            Storage::delete("public/materi/cover/" . $tugases->cover);

            $cover = $request->file('cover');
            $extension = $cover->getClientOriginalName();
            $coverName = date('YmdHis') . "." . $extension;
            $cover->move(storage_path('app/public/tugas/cover'), $coverName);
        } else {
            $coverName = $tugases->cover;
        };

        $tugasesUpdate = $request->all();
        $tugasesUpdate['cover'] = $coverName;

        $tugases->update($tugasesUpdate);

        return to_route('tugas-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tugases = Tugas::findOrFail($id);

        Storage::delete("public/materi/cover/" . $tugases->cover);

        $tugases->delete();

        return to_route('tugas-guru.index');
    }

    public function detail(string $id)
    {
        $tugases = Tugas::where('id', $id)->with(['classes'])->first();

        return Inertia::render('Guru/RuangProyek/Tugas/TugasDetail', compact('tugases'));
    }
}
