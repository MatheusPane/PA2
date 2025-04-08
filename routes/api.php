<?php
use App\Http\Controllers\API\ProductApiController;
use App\Http\Controllers\API\CategoryApiController;
use Illuminate\Support\Facades\Route;

Route::get('/products', [ProductApiController::class, 'index']);
Route::get('/products/{id}', [ProductApiController::class, 'show']);

Route::get('/categories', [CategoryApiController::class, 'index']);

