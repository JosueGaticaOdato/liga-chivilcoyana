<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jugador extends Model
{
  // Vinculo con la tabla jugadores
  protected $table = 'jugadores';

  // Asignacion masiva de atributos
  protected $fillable = [
    'nombre',
    'apellido',
    'fecha_nacimiento',
    'nacionalidad',
    'posicion_principal',
    'foto'
  ];

  // Casting de atributos
  protected $casts = [
    'fecha_nacimiento' => 'date'
  ];

  // Un jugador puede estar en muchos planteles
  public function plantel()
  {
    return $this->hasMany(Plantel::class);
  }

  // Un jugador puede tener muchos eventos de partido
  public function eventosPartido()
  {
    return $this->hasMany(EventoPartido::class);
  }
}
