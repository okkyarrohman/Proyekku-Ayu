<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KelompokUser extends Model
{
    use HasFactory;

    protected $table = 'kelompok_users';

    protected $fillable = [
        'kelompok_id',
        'user_id',
        'role'
    ];

    public function kelompoks() {
        return $this->belongsTo(Kelompok::class, 'kelompok_id', 'id');
    }

    public function users() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
