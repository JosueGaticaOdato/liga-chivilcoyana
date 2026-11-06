<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\TorneoResource;
use App\Models\Torneo;
use Illuminate\Http\Request;

class TorneoController
{

  public function index()
  {
    $torneos = Torneo::all();

    return TorneoResource::collection($torneos)
      ->response()
      ->setStatusCode(200);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    //
  }
}
