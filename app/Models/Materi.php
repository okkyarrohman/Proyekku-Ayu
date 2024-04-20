<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Materi extends Model
{
    use HasFactory;

    protected $table = 'materis';

    protected $fillable = [
        'name',
        'desc',
        'cover',
        'file',
        'link_video',
        'mapel_id'
    ];

    public function mapels() {
        return $this->belongsTo(MataPelajaran::class, 'mapel_id', 'id');
    }
}
