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

        $guru2 = User::create([
            'name' => 'guru2 Proyekku',
            'email' => 'guru2@proyekku.com',
            'role' => 'guru',
            'password' => bcrypt('guru123')
        ]);
        $guru2->assignRole('guru');

        $murid = User::create([
            'name' => 'murid Proyekku',
            'email' => 'murid@proyekku.com',
            'class_id' => '1',
            'role' => 'murid',
            'password' => bcrypt('murid123')
        ]);
        $murid->assignRole('murid');

        $murid2 = User::create([
            'name' => 'murid2 Proyekku',
            'email' => 'murid2@proyekku.com',
            'class_id' => '2',
            'role' => 'murid',
            'password' => bcrypt('murid123')
        ]);
        $murid2->assignRole('murid');

        $murid3 = User::create([
            'name' => 'siswa3 Proyekku',
            'email' => 'siswa3@proyekku.com',
            'class_id' => '2',
            'role' => 'murid',
            'password' => bcrypt('siswa123')
        ]);
        $murid3->assignRole('murid');

        $admin = User::create([
            'name' => 'admin Proyekku',
            'email' => 'admin@proyekku.com',
            'role' => 'admin',
            'password' => bcrypt('admin123')
        ]);
        $admin->assignRole('admin');
    }
}
