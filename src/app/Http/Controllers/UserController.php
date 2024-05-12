<?php 

namespace App\Http\Controllers;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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

    public function follow(Request $request): RedirectResponse
    {
        $id = $request->input('id');
        $user = User::find($id);
        $request->user()->followed()->toggle($user);
        return to_route('room', ['id'=>$id]);
    }
}