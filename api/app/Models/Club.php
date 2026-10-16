<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Club extends Model
{
  // Vinculo con la tabla clubes
  protected $table = 'clubes';

  // Asignacion masiva de atributos
  protected $fillable = [
    'nombre',
    'nombre_institucional',
    'slug',
    'fecha_fundacion',
    'presidente',
    'descripcion',
    'estadio_id',
    'escudo',
    'activo'
  ];

  // Casting de atributos
  protected $casts = [
    'fecha_fundacion' => 'date',
    'activo' => 'boolean',
  ];

  // Cada club tiene su estadio (pertenece a un estadio)
  public function estadio(): BelongsTo
  {
    return $this->belongsTo(Estadio::class);
  }

  // Un club tiene muchos equipos
  public function Equipos(): HasMany
  {
    return $this->hasMany(Equipo::class);
  }
}
