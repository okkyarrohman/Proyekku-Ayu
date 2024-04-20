<?php

namespace Database\Factories;

use App\Models\MataPelajaran;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Materi>
 */
class MateriFactory extends Factory
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
            'file' => $this->faker->imageUrl(),
            'link_video' => $this->faker->domainName(),
            'mapel_id' => MataPelajaran::inRandomOrder()->first()->id
        ];
    }
}
