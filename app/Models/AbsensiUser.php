<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AbsensiUser extends Model
{
    use HasFactory;

    protected $table = 'absensi_users';

    protected $fillable = [
        'absen_id',
        'user_id'
    ];

    public function absens() {
        return $this->belongsTo(Absensi::class, 'absen_id', 'id');
    }

    public function users() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
