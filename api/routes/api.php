<?php

use App\Http\Controllers\Api\ClubController;
use App\Http\Controllers\Api\TorneoController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return "Get request";
});

/* ===== CLUBES ===== */

Route::get('/clubes', ClubController::class . '@index');
Route::get('/clubes/{club:slug}', ClubController::class . '@show');

/* ===== TORNEOS ===== */

Route::get('/torneos', TorneoController::class . '@index');
