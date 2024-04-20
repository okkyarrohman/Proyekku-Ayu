<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\MataPelajaran;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MataPelajaranAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchName = $request->input('searchName');
        $searchClass = $request->input('searchClass');

        $mapels = MataPelajaran::with(['classes'])
            ->when($searchName, function ($query) use ($searchName) {
                $query->where('name', 'like', '%' . $searchName . '%');
            })
            ->when($searchClass, function ($query) use ($searchClass) {
                $query->where('class_id', 'like', '%' . $searchClass . '%');
            })
            ->get();

        // $mapels = MataPelajaran::all();

        $users = User::where('role', 'guru')->get();

        $classes = Classes::all();

        return Inertia::render('Admin/DataMaster/MataPelajaran/MataPelajaranIndex', compact('mapels', 'users', 'classes'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users = User::where('role', 'guru')->get();

        $classes = Classes::all();

        return Inertia::render('Admin/DataMaster/MataPelajaran/MataPelajaranCreate', compact('users', 'classes'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        MataPelajaran::create([
            'name' => $request->name,
            'class_id' => $request->class_id,
            'guru_id' => $request->guru_id
        ]);

        return to_route('mapel-admin.index');
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
        $mapels = MataPelajaran::where('id', $id)->first();

        $users = User::where('role', 'guru')->get();

        $classes = Classes::all();

        return Inertia::render('Admin/DataMaster/MataPelajaran/MataPelajaranEdit', compact('mapels', 'users', 'classes'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $mapels = MataPelajaran::find($id);

        $mapelsUpdate = $request->all();

        $mapels->update($mapelsUpdate);

        return to_route('mapel-admin.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $mapels = MataPelajaran::find($id);

        $mapels->delete();

        return to_route('mapel-admin.index');
    }
}
