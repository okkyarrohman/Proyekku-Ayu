<?php

namespace Database\Factories;

use App\Models\Classes;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Absensi>
 */
class AbsensiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $classes = Classes::inRandomOrder()->with('mapels')->first();

        return [
            'date' => Carbon::now()->format('Y-m-d H:i:s'),
            'class_id' => $classes->id,
            'mapel_id' => $classes->mapels->random()->id,
            'meeting' => $this->faker->numberBetween(1, 10),
        ];
    }
}
