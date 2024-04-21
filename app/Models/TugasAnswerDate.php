<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TugasAnswerDate extends Model
{
    use HasFactory;

    protected $table = 'tugas_answer_dates';

    protected $fillable = [
        'answer_id',
        'date_1',
        'date_2',
        'date_3',
        'date_4',
    ];
}
