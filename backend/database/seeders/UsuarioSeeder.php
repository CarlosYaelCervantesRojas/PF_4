<?php

namespace Database\Seeders;

use App\Models\Usuario;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        {
            Usuario::create(['id_persona' => 1, 'usuario' => 'usuario1', 'clave' => 'clave','habilitado' => 1, 'fecha'  => '1999-06-16', 'id_rol' => 1, 'habilitado' => 1, 'fecha_creacion' => now()]);
            Usuario::create(['id_persona' => 2, 'usuario' => 'usuario2', 'clave' => 'clave','habilitado' => 1, 'fecha'  => '1999-06-16', 'id_rol' => 2, 'habilitado' => 1, 'fecha_creacion' => now()]);
            Usuario::create(['id_persona' => 3, 'usuario' => 'usuario3', 'clave' => 'clave','habilitado' => 1, 'fecha'  => '1999-06-16', 'id_rol' => 3, 'habilitado' => 1, 'fecha_creacion' => now()]);
        }
    }
}
