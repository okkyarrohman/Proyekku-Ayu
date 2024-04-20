<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MataPelajaran extends Model
{
    use HasFactory;

    protected $table = 'mata_pelajarans';

    protected $fillable = [
        'name',
        'class_id',
        'guru_id',
    ];

    public function classes() {
        return $this->belongsTo(Classes::class, 'class_id', 'id');
    }

    public function materis() {
        return $this->hasMany(Materi::class, 'mapel_id', 'id');
    }
}
