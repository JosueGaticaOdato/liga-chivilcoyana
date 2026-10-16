<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Torneo extends Model
{
  // Asignacion masiva de atributos
  protected $fillable = [
    'nombre',
    'temporada_id',
    'categoria_id',
    'slug',
    'fecha_inicio',
    'fecha_fin',
    'descripcion',
    'estado'
  ];

  // Casting de atributos
  protected $casts = [
    'fecha_inicio' => 'date',
    'fecha_fin' => 'date'
  ];

  // Un torneo pertenece a una temporada
  public function temporada()
  {
    return $this->belongsTo(Temporada::class);
  }

  // Un torneo tiene muchos partidos
  public function partidos()
  {
    return $this->hasMany(Partido::class);
  }

  // Un torneo pertenece a una categoria
  public function categoria()
  {
    return $this->belongsTo(Categoria::class);
  }

  // Un torneo tiene muchas fases
  public function fases()
  {
    return $this->hasMany(Fase::class);
  }
}
