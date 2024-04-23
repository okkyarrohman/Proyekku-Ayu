<?php

namespace Database\Factories;

use App\Models\Absensi;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AbsensiUser>
 */
class AbsensiUserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'absen_id' => Absensi::inRandomOrder()->first()->id,
            'user_id' => User::inRandomOrder()->where('role', 'murid')->first()->id
        ];
    }
}
