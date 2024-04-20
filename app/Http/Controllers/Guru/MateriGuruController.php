<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\MataPelajaran;
use App\Models\Materi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MateriGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchMapel = $request->input('searchMapel');
        $searchClass = $request->input('searchClass');

        // $materis = Materi::with(['mapels.classes'])->get();

        $materis = Materi::with(['mapels.classes'])
            ->when($searchMapel, function ($query) use ($searchMapel) {
                $query->where('mapel_id', 'like', '%' . $searchMapel . '%');
            })
            ->when($searchClass, function ($query) use ($searchClass) {
                $query->whereHas('mapels', function ($subQuery) use ($searchClass) {
                    $subQuery->where('class_id', 'like', '%' . $searchClass . '%');
                });
            })
            ->get();

        $classes = Classes::all();

        $mapels = MataPelajaran::all();

        return Inertia::render('Guru/RuangProyek/Materi/MateriIndex', compact('materis', 'classes', 'mapels'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $mapels = MataPelajaran::all();

        return Inertia::render('Guru/RuangProyek/Materi/MateriCreate', compact('mapels'));
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
            $cover->move(storage_path('app/public/materi/cover'), $coverName);
        };

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/materi/file'), $fileName);
        };

        Materi::create([
            'name' => $request->name,
            'desc' => $request->desc,
            'cover' => $coverName,
            'file' => $fileName,
            'link_video' => $request->link_video,
            'mapel_id' => $request->mapel_id
        ]);

        return to_route('materi-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $materis = Materi::where('id', $id)->first();

        return Inertia::render('Guru/RuangProyek/Materi/MateriShow', compact('materis'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $materis = Materi::where('id', $id)->first();

        $mapels = MataPelajaran::all();

        return Inertia::render('Guru/RuangProyek/Materi/MateriEdit', compact('materis', 'mapels'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $materis = Materi::findOrFail($id);

        if ($request->hasFile('cover')) {
            Storage::delete("public/materi/cover/" . $materis->cover);

            $cover = $request->file('cover');
            $extension = $cover->getClientOriginalName();
            $coverName = date('YmdHis') . "." . $extension;
            $cover->move(storage_path('app/public/materi/cover'), $coverName);
        } else {
            $coverName = $materis->cover;
        };

        if ($request->hasFile('file')) {
            Storage::delete("public/materi/file/" . $materis->file);

            $file = $request->file('file');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/materi/file'), $fileName);
        } else {
            $fileName = $materis->file;
        };

        $materisUpdate = $request->all();
        $materisUpdate['cover'] = $coverName;
        $materisUpdate['file'] = $fileName;

        $materis->update($materisUpdate);

        return to_route('materi-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $materis = Materi::findOrFail($id);

        Storage::delete('public/materi/cover' . $materis->cover);
        Storage::delete('public/materi/file' . $materis->file);

        $materis->delete();

        return to_route('materi-guru.index');
    }
}
