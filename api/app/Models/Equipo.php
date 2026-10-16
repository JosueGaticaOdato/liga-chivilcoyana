<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Equipo extends Model
{
  // Asignacion masiva de atributos
  protected $fillable = [
    'nombre',
    'activo',
    'club_id',
    'categoria_id',
  ];

  // Casting de atributos
  protected $casts = [
    'activo' => 'boolean',
  ];

  // Cada equipo tiene su categoria (pertenece a una categoria)
  public function categoria(): BelongsTo
  {
    return $this->belongsTo(Categoria::class);
  }

  // Cada equipo tiene su club (pertenece a un club)
  public function club(): BelongsTo
  {
    return $this->belongsTo(Club::class);
  }

  // Un equipo puede tener muchos partidos como local y visitante
  public function partidosLocal()
  {
    return $this->belongsTo(Partido::class, 'equipo_local_id');
  }


  public function partidosVisitante()
  {
    return $this->belongsTo(Partido::class, 'equipo_visitante_id');
  }

  // Un equipo puede tener muchos jugadores en su plantel
  public function plantel()
  {
    return $this->hasMany(Plantel::class);
  }

  // Un equipo puede participar en muchas competiciones
  public function equiposTorneos()
  {
    return $this->hasMany(EquipoCompeticion::class);
  }

  // Un equipo puede tener muchos eventos de partido
  public function eventoPartido()
  {
    return $this->belongsTo(EventoPartido::class);
  }
}
