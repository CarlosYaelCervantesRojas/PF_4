<?php

use App\Http\Controllers\EnlaceController;
use App\Http\Controllers\PaginaController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('persona/{id}', [PersonaController::class, 'show']);
Route::get('personas', [PersonaController::class, 'index']);

Route::controller(UsuarioController::class)->group(function(){
    Route::get('/usuarios', 'index');
    Route::post('/login', 'login');
    Route::get('/usuario/{id}', 'show');
    Route::post('/usuario/create', "create");
    Route::post('/usuario/update/{id}', "update");
    Route::post('/usuario/destroy/{id}', "destroy");
});

Route::controller(RolController::class)->group(function(){
    Route::get('/roles', 'index');
    Route::get('/rol/{id}', 'show');
    Route::post('/rol/create', "create");
    Route::post('/rol/update/{id}', "update");
    Route::post('/rol/destroy/{id}', "destroy");
});

Route::controller(PaginaController::class)->group(function(){
    Route::get('/paginas', 'index');
    Route::get('/pagina/{id}', 'show');
    Route::post('/pagina/create', "create");
    Route::post('/pagina/update/{id}', "update");
    Route::post('/pagina/destroy/{id}', "destroy");
});

Route::controller(EnlaceController::class)->group(function(){
    Route::get('/enlaces', 'index');
    Route::get('/enlace/{id}', 'show');
    Route::post('/enlace/create', "create");
    Route::post('/enlace/update/{id}', "update");
    Route::put('/enlace/destroy/{id}', "destroy");
});