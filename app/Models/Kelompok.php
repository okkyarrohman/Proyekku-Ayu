<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kelompok extends Model
{
    use HasFactory;

    protected $table = 'kelompoks';

    protected $fillable = [
        'tugas_id',
        'name',
        'number',
        'class_id'
    ];

    public function classes() {
        return $this->belongsTo(Classes::class, 'class_id', 'id');
    }

    public function tugases() {
        return $this->belongsTo(Tugas::class, 'tugas_id', 'id');
    }

    public function members() {
        return $this->hasMany(KelompokUser::class, 'kelompok_id', 'id');
    }

    // public function members() {
    //     return $this->hasMany(User::class, 'kelompok_id', 'id');
    // }
}
