<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class TorneoResource extends JsonResource
{

  // Representacion resumida del torneo
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      'nombre' => $this->nombre,
      'slug' => $this->slug,
      'estado' => $this->estado,

      'temporada' => $this->whenLoaded('temporada', function () {
        return $this->temporada ? [
          'id' => $this->temporada->id,
          'nombre' => $this->temporada->nombre,
        ] : null;
      }),
      'categoria' => $this->whenLoaded('categoria', function () {
        return $this->categoria ? [
          'id' => $this->categoria->id,
          'nombre' => $this->categoria->nombre,
        ] : null;
      }),
    ];
  }
}
