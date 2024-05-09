<?php 

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use App\Services\PostService;

class UserController extends Controller
{
    public function get(Request $request): Response
    {
        $id = $request->input('id');
        $user = User::find($id);
        $posts = PostService::getPosts($user);
        $liked_posts = PostService::getLikedPosts($user);
        return Inertia::render('IdeikoRoom', [
            'currentUser' => $user,
            'posts' => $posts,
            'likedPosts' => $liked_posts
        ]);
    }
}