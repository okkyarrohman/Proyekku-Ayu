<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    use HasFactory;

    protected $table = 'classes';

    protected $fillable = [
        'name'
    ];

    public function mapels() {
        return $this->hasMany(MataPelajaran::class, 'class_id', 'id');
    }
}
