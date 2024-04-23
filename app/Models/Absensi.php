<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Absensi extends Model
{
    use HasFactory;

    protected $table = 'absensis';

    protected $fillable = [
        'date',
        'class_id',
        'mapel_id',
        'meeting'
    ];

    public function classes() {
        return $this->belongsTo(Classes::class, 'class_id', 'id');
    }

    public function mapels() {
        return $this->belongsTo(MataPelajaran::class, 'mapel_id', 'id');
    }

    public function user_presents() {
        return $this->hasMany(AbsensiUser::class, 'absen_id', 'id');
    }
}
