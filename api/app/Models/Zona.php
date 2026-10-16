<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Zona extends Model
{
  // Asignacion masiva de atributos
  protected $fillable = [
    'nombre',
    'fase_id',
  ];

  // Una zona pertenece a una fase
  public function fase()
  {
    return $this->belongsTo(Fase::class);
  }

  // Una zona tiene muchos partidos
  public function partidos()
  {
    return $this->hasMany(Partido::class);
  }

  // Una zona tiene muchos equipos en competicion
  public function equipoCompeticion()
  {
    return $this->hasMany(EquipoCompeticion::class);
  }
}
