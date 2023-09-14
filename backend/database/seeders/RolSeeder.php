<?php

namespace Database\Seeders;

use App\Models\Rol;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Rol::create(['rol' => 'Administrador', 'fecha_creacion' => now(), 'fecha_modificacion' => null, 'usuario_creacion' => null, 'usuario_modificacion' => null]);
        Rol::create(['rol' => 'Supervisor', 'fecha_creacion' => now(), 'fecha_modificacion' => null, 'usuario_creacion' => null, 'usuario_modificacion' => null]);
        Rol::create(['rol' => 'Usuario', 'fecha_creacion' => now(), 'fecha_modificacion' => null, 'usuario_creacion' => null, 'usuario_modificacion' => null]);
    }
}
