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
        Schema::create('enlaces', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pagina_id');
            $table->unsignedBigInteger('rol_id');
            $table->string('descripcion');
            $table->date('fecha_creacion');
            $table->date('fecha_modificacion')->nullable();
            $table->unsignedBigInteger('usuario_creacion');
            $table->unsignedBigInteger('usuario_modificacion')->nullable();
            $table->timestamps();

            $table->foreign('pagina_id')->references('id')->on('paginas');
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
        Schema::dropIfExists('enlaces');
    }
};
