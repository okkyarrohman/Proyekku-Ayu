<?php

namespace App\Http\Controllers\Murid;

use App\Http\Controllers\Controller;
use App\Models\Tugas;
use App\Models\TugasAnswer;
use App\Models\TugasAnswerDate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TugasMuridController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchClass = $request->input('searchClass');

        $tugases = Tugas::with(['classes', 'answers'])->where('class_id', Auth::user()->class_id)
            ->when($searchClass, function ($query) use ($searchClass) {
                $query->where('class_id', 'like', '%' . $searchClass . '%');
            })
            ->get();

        return Inertia::render('Murid/RuangProyek/Tugas/TugasIndex', compact('tugases'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('murid.tugas.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $answers = TugasAnswer::create([
            'tugas_id' => $request->tugas_id,
            'user_id' => Auth::user()->id,
            'answer_1' => $request->answer_1,
            'answer_2' => $request->answer_2,
            'answer_3' => $request->answer_3,
            'answer_4' => $request->answer_4,
            'answer_5' => $request->answer_5,
            'answer_6' => $request->answer_6,
        ]);

        TugasAnswerDate::create([
            'answer_id' => $answers->id,
            'date_1' => $request->date_1,
            'date_2' => $request->date_2,
            'date_3' => $request->date_3,
            'date_4' => $request->date_4,
        ]);

        return to_route('tugas.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tugases = Tugas::where('id', $id)->with(['answers'])->first();

        $answers = TugasAnswer::where('tugas_id', $id)->where('user_id', Auth::user()->id)->with(['tugases', 'answer_dates'])->first();

        return Inertia::render('Murid/RuangProyek/Tugas/TugasShow', compact('tugases', 'answers'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $tugases = Tugas::where('id', $id)->with(['answers'])->first();

        $answers = TugasAnswer::where('tugas_id', $id)->where('user_id', Auth::user()->id)->with(['tugases', 'answer_dates'])->first();

        return Inertia::render('Murid/RuangProyek/Tugas/TugasEdit', compact('tugases', 'answers'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $answerId)
    {
        $answers = TugasAnswer::findOrFail($answerId);

        $answersUpdate = $request->all();

        $answers->update($answersUpdate);

        $answers->answer_dates()->updateOrCreate(
            ['answer_id' => $answers->id],
            [
                'date_1' => $request->date_1,
                'date_2' => $request->date_2,
                'date_3' => $request->date_3,
                'date_4' => $request->date_4,
            ]
        );

        return redirect()->route('tugas.index')->with('success', 'Data Berhasil Diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return redirect()->route('tugas.index')->with('success', 'Data Berhasil Dihapus');
    }
}
