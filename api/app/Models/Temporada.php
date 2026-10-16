<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Temporada extends Model
{
  // Asignacion masiva de atributos
  protected $fillable = [
    'nombre',
    'fecha_inicio',
    'fecha_fin',
    'activa'
  ];

  // Casting de atributos
  protected $casts = [
    'fecha_inicio' => 'date',
    'fecha_fin' => 'date',
    'activa' => 'boolean',
  ];

  // Una tempoarada tiene muchos torneos
  public function torneos()
  {
    return $this->hasMany(Torneo::class);
  }

  // Una temporada tiene muchos planteles
  public function planteles()
  {
    return $this->hasMany(Plantel::class);
  }
}
