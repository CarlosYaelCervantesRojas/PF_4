<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Enlace extends Model
{
    use HasFactory;

    public function rol(): BelongsTo
    {
        return $this->belongsTo(Rol::class);
    }

    public function pagina(): BelongsTo
    {
        return $this->belongsTo(Pagina::class);
    }
}
