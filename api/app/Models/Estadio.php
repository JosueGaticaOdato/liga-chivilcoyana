<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Estadio extends Model
{
  // Asignacion masiva de atributos
  protected $fillable = [
    'nombre',
    'direccion',
    'latitud',
    'longitud',
    'capacidad'
  ];

  // Un estadio tiene muchos clubes
  public function clubes(): HasMany
  {
    return $this->hasMany(Club::class);
  }

  // Un estadio tiene muchos partidos
  public function partidos(): HasMany
  {
    return $this->hasMany(Partido::class);
  }
}
