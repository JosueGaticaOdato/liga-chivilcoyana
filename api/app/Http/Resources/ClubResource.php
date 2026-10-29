<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ClubResource extends JsonResource
{
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      'nombre' => $this->nombre,
      'slug' => $this->slug,
      'escudo' => $this->escudo ? Storage::disk('public')->url($this->escudo) : null,
    ];
  }
}
