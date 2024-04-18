<?php

namespace Database\Factories;

use App\Models\Classes;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MataPelajaran>
 */
class MataPelajaranFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'class_id' => Classes::inRandomOrder()->first()->id,
            'name' => $this->faker->name(),
            'guru_id' => User::inRandomOrder()->where('role', 'guru')->first()->id,
        ];
    }
}
