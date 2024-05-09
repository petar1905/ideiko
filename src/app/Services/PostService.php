<?php
namespace App\Services;
use App\Models\Post;
class PostService {
    public static function getAllPosts()
    {
        $posts = Post::query()
        ->join('users', 'posts.user_id', '=', 'users.id')
        ->select('posts.*', 'users.name as user_name')
        ->get();
        return $posts;
    }
}