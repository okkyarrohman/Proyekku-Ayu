<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\MataPelajaran;
use App\Models\Materi;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([ClassesSeeder::class]);
        $this->call([RoleSeeder::class]);
        $this->call([UserSeeder::class]);

        MataPelajaran::factory(3)->create();
        Materi::factory(5)->create();
    }
}
