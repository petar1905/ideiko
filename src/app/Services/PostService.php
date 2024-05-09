<?php
namespace App\Services;
use App\Models\User;
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
    public static function getPosts(User $user) {
        $posts = Post::query()
        ->select('posts.*', 'users.name as user_name')
        ->where('user_id', '=', $user->id)
        ->join('users', 'posts.user_id', '=', 'users.id')
        ->get();
        return $posts;
    }

    public static function getLikedPosts(User $user) {
        $posts = $user->likedPosts()
        ->select('posts.*', 'users.name as user_name')
        ->where('posts.user_id', '=', $user->id)
        ->join('users', 'posts.user_id', '=', 'users.id')
        ->get();
        return $posts;
    }
}