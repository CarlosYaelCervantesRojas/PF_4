<?php

namespace App\Http\Controllers;

use App\Models\Pagina;
use Illuminate\Http\Request;

class PaginaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $paginas = Pagina::where('estado', 1)->get();
        return $paginas;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $nuevaPagina = new Pagina();

        $nuevaPagina->rol = $request->rol;
        $nuevaPagina->fecha_creacion = date("Y-m-d");
        $nuevaPagina->usuario_creacion = $request->usuario_creacion;
        $nuevaPagina->url = $request->url;
        $nuevaPagina->estado = 1;
        $nuevaPagina->nombre = $request->nombre;
        $nuevaPagina->descripcion = $request->descripcion;
        $nuevaPagina->icono = $request->icono;
        $nuevaPagina->tipo = $request->tipo;
        $nuevaPagina->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $pagina = Pagina::find($id);
    
        return $pagina;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $pagina = Pagina::find($id);

        if ($pagina) {
            $pagina->fecha_modificacion = date("Y-m-d");
            $pagina->usuario_modificacion = $request->usuario_modificacion;
            $pagina->url = $request->url;
            $pagina->estado = $request->estado;
            $pagina->nombre = $request->nombre;
            $pagina->descripcion = $request->descripcion;
            $pagina->icono = $request->icono;
            $pagina->tipo = $request->tipo;
            $pagina->save();

            return "Pagina actualizada";
        } else {
            return response()->json([
                'message' => "No se encontro la pagina $id"
            ], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $pagina = Pagina::find($id);
        if ($pagina) {
            $pagina->estado = 0;
            $pagina->save();

            return "pagina borrada";
        } else {
            return response()->json([
                'message' => "No se encontro la pagina $id"
            ], 200);
        }
    }
}
