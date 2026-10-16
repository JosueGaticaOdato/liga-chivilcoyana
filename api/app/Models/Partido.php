<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partido extends Model
{
  // Asignacion masiva de atributos
  protected $fillable = [
    'torneo_id',
    'fase_id',
    'zona_id',
    'equipo_local_id',
    'equipo_visitante_id',
    'estadio_id',
    'partido_vuelta_id',
    'jornada',
    'llave',
    'fecha_hora',
    'estado',
    'goles_local',
    'goles_visitante',
    'goles_local_penales',
    'goles_visitante_penales',
  ];

  // Casting de atributos
  protected $casts = [
    'fecha_hora' => 'datetime',
  ];

  // Un partido pertenece a una fase
  public function fase()
  {
    return $this->belongsTo(Fase::class);
  }

  // Un partido pertenece a una zona
  public function zona()
  {
    return $this->belongsTo(Zona::class);
  }

  // Un partido tiene un equipo local y un equipo visitante
  public function local()
  {
    return $this->belongsTo(Equipo::class, 'equipo_local_id');
  }

  public function visitante()
  {
    return $this->belongsTo(Equipo::class, 'equipo_visitante_id');
  }

  // Un partido pertenece a un torneo
  public function torneo()
  {
    return $this->belongsTo(Torneo::class);
  }

  // Un partido pertenece a un estadio
  public function estadio()
  {
    return $this->belongsTo(Estadio::class);
  }

  // Un partido tiene muchos eventos
  public function eventoPartidos()
  {
    return $this->hasMany(EventoPartido::class);
  }
}
