<?php

use App\Http\Controllers\Api\ClubController;
use Illuminate\Support\Facades\Route;

Route::get('/', function (){
  return "Get request";
});

Route::get('/clubes',ClubController::class . '@index');
