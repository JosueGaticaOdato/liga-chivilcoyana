<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plantel extends Model
{
  // Vinculo con la tabla planteles
  protected $table = 'planteles';
  protected $fillable = [
    'dorsal',
    'fecha_incorporacion',
    'fecha_baja',
    'activo'
  ];

  // Casting de atributos
  protected $casts = [
    'fecha_incorporacion' => 'date',
    'fecha_baja' => 'date',
    'activo' => 'boolean'
  ];

  // Un plantel tiene muchos jugadores
  public function jugador()
  {
    return $this->belongsTo(Jugador::class);
  }

  // Un plantel pertenece a un equipo
  public function equipo()
  {
    return $this->belongsTo(Equipo::class);
  }
  
  // Un plantel pertenece a una temporada
  public function temporada()
  {
    return $this->belongsTo(Temporada::class);
  }
}
