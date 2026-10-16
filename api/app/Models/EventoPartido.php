<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EventoPartido extends Model
{
  // Asignacion masiva de atributos
  protected $fillable = [
    'partido_id',
    'equipo_id',
    'jugador_id',
    'tipo_evento',
    'minuto',
    'detalle',
  ];

  // Un evento de partido pertenece a un partido
  public function partido()
  {
    return $this->belongsTo(Partido::class);
  }

  // Un evento de partido pertenece a un equipo
  public function equipo()
  {
    return $this->belongsTo(Equipo::class);
  }

  // Un evento de partido pertenece a un jugador
  public function jugador()
  {
    return $this->belongsTo(Jugador::class);
  }
}
