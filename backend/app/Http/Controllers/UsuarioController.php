<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use App\Models\Persona;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuarios = Usuario::where('habilitado', 1)->get();
        return $usuarios;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $nuevaPersona = new Persona();

        $nuevaPersona->primer_nombre = $request->primer_nombre;
        $nuevaPersona->segundo_nombre = $request->segundo_nombre;
        $nuevaPersona->primer_apellido = $request->primer_apellido;
        $nuevaPersona->segundo_apellido = $request->segundo_apellido;
        $nuevaPersona->fecha_creacion = date("Y-m-d"); 
        $nuevaPersona->usuario_creacion = $request->usuario_creacion;

        $nuevaPersona->save();


        $nuevoUsuario = new Usuario();

        $persona_id = $nuevaPersona->id;
        $nuevoUsuario->persona_id = $persona_id;
        $nuevoUsuario->usuario = $request->usuario;
        $nuevoUsuario->clave = $request->clave;
        $nuevoUsuario->habilitado = 1;
        $nuevoUsuario->fecha = date("Y-m-d"); 
        $nuevoUsuario->rol_id = $request->rol_id;
        $nuevoUsuario->fecha_creacion = date("Y-m-d");
        $nuevoUsuario->usuario_creacion = $request->usuario_creacion;

        $nuevoUsuario->save();
        // return  redirect("http://localhost:5175/");
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $usuario = Usuario::find($id);
        $usuario->persona;

        return $usuario;
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $persona = Persona::find($id);

        if ($persona) {
            $persona->primer_nombre = $request->primer_nombre;
            $persona->segundo_nombre = $request->segundo_nombre;
            $persona->primer_apellido = $request->primer_apellido;
            $persona->segundo_apellido = $request->segundo_apellido;
            $persona->fecha_modificacion = date("Y-m-d");
            $persona->usuario_modificacion = $request->usuario_modificacion;
            $persona->save();

            $usuario = Usuario::where('persona_id', $id)->get();

            $usuario->usuario = $request->usuario;
            $usuario->clave = $request->clave;
            $usuario->habilitado = $request->habilitado;
            $usuario->rol_id = $request->rol_id;
            $usuario->fecha_modificacion = date("Y-m-d");
            $usuario->usuario_modificacion = $request->usuario_modificacion;
            $usuario->save();

            return "persona actualizada";
        } else {
            return response()->json([
                'message' => "No se encontro la persona $id"
            ], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $usuario = Usuario::find($id);
        if ($usuario) {
            $usuario->habilitado = 0;
            $usuario->save();

            return "usuario borrado";
        } else {
            return response()->json([
                'message' => "No se encontro el usuario $id"
            ], 200);
        }
    }
}
