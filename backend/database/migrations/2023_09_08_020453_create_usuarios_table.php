<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('persona_id');
            $table->string('usuario');
            $table->string('clave');
            $table->boolean('habilitado');
            $table->date('fecha');
            $table->unsignedBigInteger('rol_id');
            $table->date('fecha_creacion');
            $table->date('fecha_modificacion')->nullable();
            $table->unsignedBigInteger('usuario_creacion')->nullable();
            $table->unsignedBigInteger('usuario_modificacion')->nullable();
            $table->timestamps();

            $table->foreign('persona_id')->references('id')->on('personas');
            $table->foreign('rol_id')->references('id')->on('rols');
            $table->foreign('usuario_creacion')->references('id')->on('usuarios');
            $table->foreign('usuario_modificacion')->references('id')->on('usuarios');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
