<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Categoria extends Model
{
  // Asignacion masiva de atributos
  protected $fillable = [
    'nombre',
    'orden'
  ];

  // Un categoria tiene muchos equipos
  public function Equipos(): HasMany
  {
    return $this->hasMany(Equipo::class);
  }

  // Un categoria puede tener muchos torneos
  public function Torneos(): HasMany
  {
    return $this->hasMany(Torneo::class);
  }
}
