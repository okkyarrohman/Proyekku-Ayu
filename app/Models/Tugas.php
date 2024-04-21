<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory;

    protected $table = 'tugases';

    protected $fillable = [
        'name',
        'desc',
        'cover',
        'deadline',
        'class_id',
        'step_1',
        'desc_1',
        'step_2',
        'desc_2',
        'step_3',
        'desc_3',
        'step_4',
        'desc_4',
        'step_5',
        'desc_5',
        'step_6',
        'desc_6',
    ];

    public function classes() {
        return $this->belongsTo(Classes::class, 'class_id', 'id');
    }

    public function answers() {
        return $this->hasMany(TugasAnswer::class, 'tugas_id', 'id');
    }

    public function kelompoks() {
        return $this->hasMany(Kelompok::class, 'tugas_id', 'id');
    }
}
