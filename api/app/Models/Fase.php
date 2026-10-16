<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Fase extends Model
{
  // Asignacion masiva de atributos
  protected $fillable = [
    'nombre',
    'torneo_id',
    'orden',
    'tipo',
  ];

  // Una fase pertenece a un torneo
  public function torneos()
  {
    return $this->belongsTo(Torneo::class);
  }

  // Una fase tiene muchos partidos
  public function partidos()
  {
    return $this->hasMany(Partido::class);
  }

  // Una fase tiene muchas zonas
  public function zonas()
  {
    return $this->hasMany(Zona::class);
  }
}
