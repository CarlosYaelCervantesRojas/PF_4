<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Rol extends Model
{
    use HasFactory;

    public function usuario(): HasOne
    {
        return $this->hasOne(Usuario::class);
    }

    public function enlaces(): HasMany
    {
        return $this->hasMany(Enlace::class);
    }
}
