<?php

namespace App\Http\Controllers\Murid;

use App\Http\Controllers\Controller;
use App\Models\Kelompok;
use App\Models\KelompokUser;
use App\Models\Notifikasi;
use App\Models\Tugas;
use App\Models\TugasAnswer;
use App\Models\TugasAnswerDate;
use App\Models\User;
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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->hasFile('answer_3')) {
            $answer_3 = $request->file('answer_3');
            $extension = $answer_3->getClientOriginalName();
            $answer3Name = date('YmdHis') . "." . $extension;
            $answer_3->move(storage_path('app/public/tugas/answer/answer_3'), $answer3Name);
        } else {
            $answer3Name = null;
        };

        if ($request->hasFile('answer_4')) {
            $answer_4 = $request->file('answer_4');
            $extension = $answer_4->getClientOriginalName();
            $answer4Name = date('YmdHis') . "." . $extension;
            $answer_4->move(storage_path('app/public/tugas/answer/answer_4'), $answer4Name);
        } else {
            $answer4Name = null;
        };

        if ($request->hasFile('answer_5')) {
            $answer_5 = $request->file('answer_5');
            $extension = $answer_5->getClientOriginalName();
            $answer5Name = date('YmdHis') . "." . $extension;
            $answer_5->move(storage_path('app/public/tugas/answer/answer_5'), $answer5Name);
        } else {
            $answer5Name = null;
        };

        if ($request->hasFile('answer_6')) {
            $answer_6 = $request->file('answer_6');
            $extension = $answer_6->getClientOriginalName();
            $answer6Name = date('YmdHis') . "." . $extension;
            $answer_6->move(storage_path('app/public/tugas/answer/answer_6'), $answer6Name);
        } else {
            $answer6Name = null;
        };

        $answers = TugasAnswer::create([
            'tugas_id' => $request->tugas_id,
            'user_id' => Auth::user()->id,
            'kelompok_id' => $request->kelompok_id,
            'answer_1' => $request->answer_1,
            'answer_3' => $answer3Name,
            'answer_4' => $answer4Name,
            'answer_5' => $answer5Name,
            'answer_6' => $answer6Name,
        ]);

        TugasAnswerDate::create([
            'answer_id' => $answers->id,
            'date_1' => $request->date_1,
            'date_2' => $request->date_2,
            'date_3' => $request->date_3,
            'date_4' => $request->date_4,
        ]);

        if ($request->answer_1 && $answer3Name && $answer4Name && $answer5Name && $answer6Name &&
        $request->date_1 && $request->date_2 && $request->date_3 && $request->date_4) {
            Notifikasi::create([
                'message' => Auth::user()->name . ' telah menyelesaikan tugas dengan judul "' . Tugas::where('id', $answers->tugas_id)->first()->name . '"',
                'from' => Auth::user()->role,
                'tugas_id' => $answers->tugas_id,
            ]);
        } else {
            Notifikasi::create([
                'message' => Auth::user()->name . ' mulai mengerjakan tugas dengan judul "' . Tugas::where('id', $answers->tugas_id)->first()->name . '"',
                'from' => Auth::user()->role,
                'tugas_id' => $answers->tugas_id,
            ]);
        }

        return to_route('tugas.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tugases = Tugas::where('id', $id)->with(['classes', 'answers', 'kelompoks.members'])->first();

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

        if ($request->hasFile('answer_3')) {
            $answer_3 = $request->file('answer_3');
            $extension = $answer_3->getClientOriginalName();
            $answer3Name = date('YmdHis') . "." . $extension;
            $answer_3->move(storage_path('app/public/tugas/answer/answer_3'), $answer3Name);
        } else {
            $answer3Name = $answers->answer_3;
        };

        if ($request->hasFile('answer_4')) {
            $answer_4 = $request->file('answer_4');
            $extension = $answer_4->getClientOriginalName();
            $answer4Name = date('YmdHis') . "." . $extension;
            $answer_4->move(storage_path('app/public/tugas/answer/answer_4'), $answer4Name);
        } else {
            $answer4Name = $answers->answer_4;
        };

        if ($request->hasFile('answer_5')) {
            $answer_5 = $request->file('answer_5');
            $extension = $answer_5->getClientOriginalName();
            $answer5Name = date('YmdHis') . "." . $extension;
            $answer_5->move(storage_path('app/public/tugas/answer/answer_5'), $answer5Name);
        } else {
            $answer5Name = $answers->answer_5;
        };

        if ($request->hasFile('answer_6')) {
            $answer_6 = $request->file('answer_6');
            $extension = $answer_6->getClientOriginalName();
            $answer6Name = date('YmdHis') . "." . $extension;
            $answer_6->move(storage_path('app/public/tugas/answer/answer_6'), $answer6Name);
        } else {
            $answer6Name = $answers->answer_6;
        };

        $answersUpdate = $request->all();
        $answersUpdate['answer_3'] = $answer3Name;
        $answersUpdate['answer_4'] = $answer4Name;
        $answersUpdate['answer_5'] = $answer5Name;
        $answersUpdate['answer_6'] = $answer6Name;

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

        if ($request->answer_1 && $answer3Name && $answer4Name && $answer5Name && $answer6Name &&
        $request->date_1 && $request->date_2 && $request->date_3 && $request->date_4) {
            Notifikasi::create([
                'message' => Auth::user()->name . ' telah menyelesaikan tugas dengan judul "' . Tugas::where('id', $answers->tugas_id)->first()->name . '"',
                'from' => Auth::user()->role,
                'tugas_id' => $answers->tugas_id,
            ]);
        }

        return to_route('tugas.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function detail(string $id)
    {
        $tugases = Tugas::where('id', $id)->with(['classes', 'answers', 'kelompoks.members'])->first();

        $answers = TugasAnswer::where('tugas_id', $id)->where('user_id', Auth::user()->id)->with(['tugases', 'answer_dates'])->first();

        $users = User::where('id', Auth::user()->id)->with(['members.kelompoks'])->first();

        return Inertia::render('Murid/RuangProyek/Tugas/TugasDetail', compact('tugases', 'answers', 'users'));
    }
}
