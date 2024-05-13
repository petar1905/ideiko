<?php 

namespace App\Http\Controllers;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Services\PostService;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function stream(Request $request): Response {
        $posts = PostService::getAllPostsPaginated();
        return Inertia::render('IdeikoStream', [
            'posts' => $posts->items(),
            'nextPageURL' => $posts->nextPageUrl(),
            'previousPageURL'=> $posts->previousPageUrl()
        ]);
    }
}