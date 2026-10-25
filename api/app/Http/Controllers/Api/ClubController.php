<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ClubResource;
use App\Models\Club;
use Illuminate\Http\Request;

class ClubController
{
  //
  public function index()
  {
    $clubes = Club::all();

    return ClubResource::collection($clubes)
      ->response()
      ->setStatusCode(200);
  }
}
