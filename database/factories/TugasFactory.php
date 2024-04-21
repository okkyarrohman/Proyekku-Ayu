<?php

namespace Database\Factories;

use App\Models\Classes;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tugas>
 */
class TugasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'desc' => $this->faker->paragraph(),
            'cover' => $this->faker->imageUrl(),
            'class_id' => Classes::inRandomOrder()->first()->id,
            'deadline' => $this->faker->dateTimeBetween('now', '+1 year')->format('Y-m-d H:i:s'),
            'step_1' => $this->faker->name(),
            'desc_1' => $this->faker->paragraph(),
            'step_2' => $this->faker->name(),
            'desc_2' => $this->faker->paragraph(),
            'step_3' => $this->faker->name(),
            'desc_3' => $this->faker->paragraph(),
            'step_4' => $this->faker->name(),
            'desc_4' => $this->faker->paragraph(),
            'step_5' => $this->faker->name(),
            'desc_5' => $this->faker->paragraph(),
            'step_6' => $this->faker->name(),
            'desc_6' => $this->faker->paragraph(),
        ];
    }
}
