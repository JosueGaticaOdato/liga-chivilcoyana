<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ClubDetailResource;
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

  public function show(Club $club)
  {
    //Cargar relacion
    $club->load('estadio');

    return (new ClubDetailResource($club))
      ->response()
      ->setStatusCode(200);
  }
}
