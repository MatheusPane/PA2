<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Jalankan migrasi untuk membuat tabel produk.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('image')->nullable(); // URL atau path gambar produk
            $table->string('title'); // Nama produk
            $table->text('description');
            $table->enum('status', ['available', 'unavailable'])->default('available'); // Status produk
            $table->decimal('price', 10, 2); // Harga produk
            $table->unsignedBigInteger('category_id'); // Foreign key ke tabel categories
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Rollback migrasi jika diperlukan.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
