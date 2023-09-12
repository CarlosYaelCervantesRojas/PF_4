<?php

namespace App\Http\Controllers;

use App\Models\Rol;
use Illuminate\Http\Request;

class RolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Rol::all();
        return $roles;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $nuevoRol = new Rol();

        $nuevoRol->rol = $request->rol;
        $nuevoRol->fecha_creacion = date("Y-m-d");
        $nuevoRol->usuario_creacion = $request->usuario_creacion;
        $nuevoRol->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $rol = Rol::find($id);
    
        return $rol;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $rol = Rol::find($id);

        if ($rol) {
            $rol->rol = $request->rol;
            $rol->fecha_modificacion = date("Y-m-d");
            $rol->usuario_modificacion = $request->usuario_modificacion;
            $rol->save();

            return "Rol actualizado";
        } else {
            return response()->json([
                'message' => "No se encontro el rol $id"
            ], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $rol = Rol::find($id);
        if ($rol) {
            $rol->destroy();

            return "rol borrado";
        } else {
            return response()->json([
                'message' => "No se encontro el rol $id"
            ], 200);
        }
    }
}
