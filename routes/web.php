<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Admin\KategoriController;
use App\Http\Controllers\Admin\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('admin.dashboard'); // Langsung ke dashboard admin
});

// Middleware untuk memastikan hanya admin yang bisa mengakses
Route::middleware(['auth', 'admin'])->group(function () {
    Route::prefix('admin')->group(function () {
        Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');

        // Rute CRUD untuk kategori
        Route::get('/kategori', [KategoriController::class, 'index'])->name('admin.kategori.index');
        Route::post('/kategori', [KategoriController::class, 'store'])->name('admin.kategori.store');
        Route::get('/kategori/{id}/edit', [KategoriController::class, 'edit'])->name('admin.kategori.edit');
        Route::put('/kategori/{id}', [KategoriController::class, 'update'])->name('admin.kategori.update');
        Route::delete('/kategori/{category}', [KategoriController::class, 'destroy'])->name('admin.kategori.destroy');  
        Route::get('/admin/kategori', [KategoriController::class, 'create'])->name('admin.kategori.create');


        // Rute CRUD untuk produk
        Route::get('/produk', [ProductController::class, 'index'])->name('admin.produk.index');
        Route::post('/produk', [ProductController::class, 'store'])->name('admin.produk.store');
        Route::get('/admin/produk/{product}/edit', [ProductController::class, 'edit'])->name('admin.produk.edit');

        Route::put('/produk/{product}', [ProductController::class, 'update'])->name('admin.produk.update');
        Route::delete('/produk/{id}', [ProductController::class, 'destroy'])->name('admin.produk.destroy');
        Route::get('/admin/produk', [ProductController::class, 'create'])->name('admin.produk.create');
    });
});

// Route Auth menggunakan Inertia
Route::middleware(['guest'])->group(function () {
    Route::get('/login', fn () => Inertia::render('Auth/Login'))->name('login');
    Route::get('/register', fn () => Inertia::render('Auth/Register'))->name('register');
});

require __DIR__.'/auth.php';
