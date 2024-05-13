<?php 

namespace App\Http\Controllers;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use App\Services\PostService;
use App\Services\UserService;

class UserController extends Controller
{
    public function get(Request $request): Response
    {
        $id = $request->input('id');
        $user = User::find($id);
        $posts = PostService::getPostsPaginated($user);
        $liked_posts = PostService::getLikedPostsPaginated($user);
        return Inertia::render('IdeikoRoom', [
            'currentUser' => $user,
            'posts' => $posts->items(),
            'nextPageURL' => $posts->nextPageUrl(),
            'previousPageURL'=> $posts->previousPageUrl(),
            'likedPosts' => $liked_posts->items()
        ]);
    }

    public function lobby(Request $request): Response
    {
        $users = UserService::getAllUsersPaginated();
        return Inertia::render('IdeikoLobby', [
            'users' => $users->items(),
            'nextPageURL' => $users->nextPageUrl(),
            'previousPageURL'=> $users->previousPageUrl()
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