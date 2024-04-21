<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TugasAnswer extends Model
{
    use HasFactory;

    protected $table = 'tugas_answers';

    protected $fillable = [
        'tugas_id',
        'user_id',
        'answer_1',
        'answer_2',
        'answer_3',
        'answer_4',
        'answer_5',
        'answer_6',
    ];

    public function tugases() {
        return $this->belongsTo(Tugas::class, 'tugas_id', 'id');
    }

    public function answer_dates() {
        return $this->hasOne(TugasAnswerDate::class, 'answer_id', 'id');
    }
}
