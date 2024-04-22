<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HasilBelajar extends Model
{
    use HasFactory;

    protected $table = 'hasil_belajars';

    protected $fillable = [
        'user_id',
        'class_id',
        'mapel_id',
        'grade',
        'grade_index',
        'meeting',
        // 'tugas_id',
        'detail'
    ];

    public function users() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function classes() {
        return $this->belongsTo(Classes::class, 'class_id', 'id');
    }

    public function mapels() {
        return $this->belongsTo(MataPelajaran::class, 'mapel_id', 'id');
    }

    // public function tugases() {
    //     return $this->belongsTo(Tugas::class, 'tugas_id', 'id');
    // }
}
