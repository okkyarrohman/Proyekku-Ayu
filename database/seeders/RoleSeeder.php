<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;


class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create([
            'name' => 'guru',
            'guard_name' => 'web',
        ]);

        Role::create([
            'name' => 'murid',
            'guard_name' => 'web',
        ]);
    }
}
