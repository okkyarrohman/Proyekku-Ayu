<?php

namespace Database\Factories;

use App\Models\Classes;
use App\Models\Tugas;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kelompok>
 */
class KelompokFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'number' => $this->faker->randomNumber(),
            'name' => $this->faker->name(),
            'class_id' => Classes::inRandomOrder()->first()->id,
            'tugas_id' => Tugas::inRandomOrder()->first()->id,
        ];
    }
}
