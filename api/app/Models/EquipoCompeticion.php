<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EquipoCompeticion extends Model
{
  // Vinculo con la tabla equipo_competicion
  protected $table = 'equipo_competicion';

  // Asignacion masiva de atributos
  protected $fillable = [
    'zona_id',
    'equipo_id',
    'estado',
    'sembrado',
    'partidos_jugados',
    'ganados',
    'empatados',
    'perdidos',
    'goles_favor',
    'goles_contra',
    'diferencia_goles',
    'puntos',
    'puntos_deducidos',
  ];

  // Un equipo en competicion pertenece a una zona
  public function zona()
  {
    return $this->belongsTo(Zona::class);
  }

  // Un equipo en competicion pertenece a un equipo
  public function equipo()
  {
    return $this->belongsTo(Equipo::class);
  }
}
