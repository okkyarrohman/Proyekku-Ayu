<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\Kelompok;
use App\Models\KelompokUser;
use App\Models\Tugas;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KelompokGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kelompoks = Kelompok::with(['members.users'])->get();

        $classes = Classes::all();

        return Inertia::render('Guru/RuangProyek/Kelompok/KelompokIndex', compact('kelompoks', 'classes'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $classes = Classes::all();

        $users = User::where('role', 'murid')->get();

        return Inertia::render('Guru/RuangProyek/Kelompok/KelompokCreate', compact('classes', 'users'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $analystIds = $request->filled('analysts') ? $request->analysts : [];
        $programmerIds = $request->filled('programmers') ? $request->programmers : [];
        $designerIds = $request->filled('designers') ? $request->designers : [];

        $kelompoks = Kelompok::create([
            'name' => $request->name,
            'number' => $request->number,
            'tugas_id' => $request->tugas_id,
            'class_id' => $request->class_id
        ]);

        if ($analystIds != [] && $designerIds != [] && $programmerIds != []) {
            foreach ($analystIds as $analyst_id) {
                KelompokUser::create([
                    'kelompok_id' => $kelompoks->id,
                    'user_id' => $analyst_id,
                    'role' => 'analyst'
                ]);
            }
            foreach ($designerIds as $designer_id) {
                KelompokUser::create([
                    'kelompok_id' => $kelompoks->id,
                    'user_id' => $designer_id,
                    'role' => 'designer'
                ]);
            }
            foreach ($programmerIds as $programmer_id) {
                KelompokUser::create([
                    'kelompok_id' => $kelompoks->id,
                    'user_id' => $programmer_id,
                    'role' => 'programmer'
                ]);
            }
        }

        return to_route('kelompok-guru.index');
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
        $kelompoks = Kelompok::where('id', $id)->first();

        $classes = Classes::all();

        $users = User::where('role', 'murid')->get();

        $analysts = KelompokUser::where('kelompok_id', $id)->where('role', 'analyst')->get();

        $designers = KelompokUser::where('kelompok_id', $id)->where('role', 'designer')->get();

        $programmers = KelompokUser::where('kelompok_id', $id)->where('role', 'programmer')->get();

        return Inertia::render('Guru/RuangProyek/Kelompok/KelompokEdit', compact(
            'kelompoks', 'classes', 'users', 'analysts', 'designers', 'programmers'
        ));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $analystIds = $request->filled('analysts') ? $request->analysts : [];
        $programmerIds = $request->filled('programmers') ? $request->programmers : [];
        $designerIds = $request->filled('designers') ? $request->designers : [];

        $kelompoks = Kelompok::findOrFail($id);

        $kelompoksUpdate = $request->all();
        $kelompoks->update($kelompoksUpdate);

        // Update analysts
        $existingAnalystIds = $kelompoks->members()->where('role', 'analyst')->pluck('user_id')->toArray();
        $newAnalysts = array_diff($analystIds, $existingAnalystIds);
        $analystsToRemove = array_diff($existingAnalystIds, $analystIds);

        foreach ($newAnalysts as $analyst_id) {
            KelompokUser::create([
                'kelompok_id' => $kelompoks->id,
                'user_id' => $analyst_id,
                'role' => 'analyst'
            ]);
        }

        foreach ($analystsToRemove as $analyst_id) {
            KelompokUser::where('kelompok_id', $kelompoks->id)
                        ->where('user_id', $analyst_id)
                        ->where('role', 'analyst')
                        ->delete();
        }

        // Update designers
        $existingDesignerIds = $kelompoks->members()->where('role', 'designer')->pluck('user_id')->toArray();
        $newDesigners = array_diff($designerIds, $existingDesignerIds);
        $designersToRemove = array_diff($existingDesignerIds, $designerIds);

        foreach ($newDesigners as $designer_id) {
            KelompokUser::create([
                'kelompok_id' => $kelompoks->id,
                'user_id' => $designer_id,
                'role' => 'designer'
            ]);
        }

        foreach ($designersToRemove as $designer_id) {
            KelompokUser::where('kelompok_id', $kelompoks->id)
                        ->where('user_id', $designer_id)
                        ->where('role', 'designer')
                        ->delete();
        }

        // Update programmers
        $existingProgrammerIds = $kelompoks->members()->where('role', 'programmer')->pluck('user_id')->toArray();
        $newProgrammers = array_diff($programmerIds, $existingProgrammerIds);
        $programmersToRemove = array_diff($existingProgrammerIds, $programmerIds);

        foreach ($newProgrammers as $programmer_id) {
            KelompokUser::create([
                'kelompok_id' => $kelompoks->id,
                'user_id' => $programmer_id,
                'role' => 'programmer'
            ]);
        }

        foreach ($programmersToRemove as $programmer_id) {
            KelompokUser::where('kelompok_id', $kelompoks->id)
                        ->where('user_id', $programmer_id)
                        ->where('role', 'programmer')
                        ->delete();
        }

        return to_route('kelompok-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $kelompoks = Kelompok::findOrFail($id);

        $kelompoks->delete();
    }
}
