<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $guru = User::create([
            'name' => 'guru Proyekku',
            'email' => 'guru@proyekku.com',
            'role' => 'guru',
            'password' => bcrypt('guru123')
        ]);
        $guru->assignRole('guru');

        $murid = User::create([
            'name' => 'murid Proyekku',
            'email' => 'murid@proyekku.com',
            'role' => 'murid',
            'password' => bcrypt('murid123')
        ]);
        $murid->assignRole('murid');
    }
}
