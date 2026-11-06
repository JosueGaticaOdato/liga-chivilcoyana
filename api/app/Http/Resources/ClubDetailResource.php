<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ClubDetailResource extends JsonResource
{

  // Representacion completa del club
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      'nombre' => $this->nombre,
      'slug' => $this->slug,
      'escudo' => $this->escudo ? Storage::disk('public')->url($this->escudo) : null,

      'descripcion' => $this->descripcion,
      'fecha_fundacion' => $this->fecha_fundacion,
      'nombre_institucional' => $this->nombre_institucional,
      'presidente' => $this->presidente,

      'estadio' => $this->whenLoaded('estadio', function () {
        return $this->estadio ? [
          'id' => $this->estadio->id,
          'nombre' => $this->estadio->nombre,
        ] : null;
      }),
    ];
  }
}
