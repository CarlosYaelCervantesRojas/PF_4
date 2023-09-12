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
        Schema::create('paginas', function (Blueprint $table) {
            $table->id();
            $table->date('fecha_creacion');
            $table->date('fecha_modificacion')->nullable();
            $table->unsignedBigInteger('usuario_creacion')->nullable();
            $table->unsignedBigInteger('usuario_modificacion')->nullable();
            $table->string('url');
            $table->boolean('estado');
            $table->string('nombre');
            $table->longText('descripcion');
            $table->binary('icono');
            $table->string('tipo');
            $table->timestamps();

            $table->foreign('usuario_creacion')->references('id')->on('usuarios');
            $table->foreign('usuario_modificacion')->references('id')->on('usuarios');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paginas');
    }
};
