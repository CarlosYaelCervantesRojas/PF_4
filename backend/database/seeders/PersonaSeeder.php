<?php

namespace Database\Seeders;

use App\Models\Persona;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PersonaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Persona::create(['primer_nombre' => 'Jose', 'segundo_nombre' => 'Moises', 'primer_apellido' => 'Peréz', 'segundo_apellido'  => 'Rios', 'fecha_creacion' => now()]);
        Persona::create(['primer_nombre' => 'Maria', 'segundo_nombre' => 'Julieta', 'primer_apellido' => 'Moreles', 'segundo_apellido'  => 'Juarez', 'fecha_creacion' => now()]);
        Persona::create(['primer_nombre' => 'Pedro', 'segundo_nombre' => 'Omar', 'primer_apellido' => 'Aquilar', 'segundo_apellido'  => 'Jimenez', 'fecha_creacion' => now()]);
    }
}
