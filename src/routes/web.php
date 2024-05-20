<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Services\PostService;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('IdeikoWelcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/stream', [PostController::class, 'stream'])->middleware(['auth'])->name('stream');
Route::get('/create', [PostController::class, 'creationPage'])->middleware(['auth'])->name('post.creation_page');

Route::get('/post', [PostController::class, 'creationPage'])->middleware(['auth'])->name('post.creation_page'); // TODO get existing post instead
Route::post('/post', [PostController::class, 'createPost'])->middleware(['auth'])->name('post.create');
Route::put('/post', [PostController::class, 'like'])->middleware(['auth'])->name('post.like');

Route::get('/lobby', [UserController::class, 'lobby'])->middleware(['auth'])->name('lobby');
Route::get('/room', [UserController::class, 'get'])->middleware(['auth'])->name('room');
Route::put('/room', [UserController::class, 'follow'])->middleware(['auth'])->name('room.follow');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
